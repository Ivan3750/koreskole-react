"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

/* ─── Types ──────────────────────────────────────────────────────────────── */
type Blog = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  created_at?: string;
  updated_at?: string;
};

type FormState = {
  id: number | null;
  title: string;
  imageUrl: string;   // existing URL or typed URL
  imageFile: File | null; // new file to upload as cover
};

/* ─── Toolbar button ─────────────────────────────────────────────────────── */
function Btn({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => {
        e.preventDefault(); // keep editor focused
        onClick();
      }}
      className={`px-2 py-1 rounded text-sm font-medium border transition-colors select-none ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

const SEP = () => <span className="w-px self-stretch bg-gray-200 mx-0.5" />;

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function BlogPage() {
  const API_URL  = "http://localhost:8000/blog.php";
  const BASE_URL = "http://localhost:8000"; // serves /uploads/…

  const [blogs,    setBlogs]    = useState<Blog[]>([]);
  const [csrf,     setCsrf]     = useState("");
  const [mounted,  setMounted]  = useState(false);
  const [saving,   setSaving]   = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error,    setError]    = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    id: null, title: "", imageUrl: "", imageFile: null,
  });

  const imgUrlRef    = useRef<HTMLInputElement>(null);
  const coverFileRef = useRef<HTMLInputElement>(null);

  /* ── TipTap ──────────────────────────────────────────────────────────── */
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      Link.configure({ openOnClick: false }),
    ],
    content: "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "min-h-[300px] p-4 outline-none", style: "cursor:text" },
    },
  });

  /* ── Init ────────────────────────────────────────────────────────────── */
  useEffect(() => {
    setMounted(true);
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/session.php", { credentials: "include" });
        const d = await res.json();
        setCsrf(d.csrf || "");
      } catch { /* optional */ }
      fetchBlogs();
    })();
  }, []);

  /* ── Helpers ─────────────────────────────────────────────────────────── */
  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_URL, { credentials: "include" });
      const d   = await res.json();
      setBlogs(d.blogs || []);
    } catch {
      setError("Could not load blogs.");
    }
  };

  const selectBlog = (b: Blog) => {
    setError(null);
    setForm({ id: b.id, title: b.title, imageUrl: b.image ?? "", imageFile: null });
    editor?.commands.setContent(b.content || "<p></p>");
  };

  const reset = useCallback(() => {
    setError(null);
    setForm({ id: null, title: "", imageUrl: "", imageFile: null });
    editor?.commands.setContent("<p></p>");
    editor?.commands.focus();
    if (coverFileRef.current) coverFileRef.current.value = "";
  }, [editor]);

  /* ── Save ────────────────────────────────────────────────────────────── */
  const save = async () => {
    if (!editor) return;
    setError(null);
    const title   = form.title.trim();
    const content = editor.getHTML();
    if (!title)                       { setError("Title is required.");   return; }
    if (!content || content === "<p></p>") { setError("Content is required."); return; }

    setSaving(true);
    try {
      const url = form.id !== null ? `${API_URL}?id=${form.id}` : API_URL;
      let res: Response;

      if (form.imageFile) {
        // multipart — PHP handle_upload() takes care of saving the file
        const fd = new FormData();
        fd.append("title",   title);
        fd.append("content", content);
        fd.append("image",   form.imageFile);
        res = await fetch(url, {
          method: "POST", credentials: "include",
          headers: { "X-CSRF-TOKEN": csrf },
          body: fd,
        });
      } else {
        // JSON — pass URL (or null to clear)
        res = await fetch(url, {
          method: "POST", credentials: "include",
          headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": csrf },
          body: JSON.stringify({ title, content, image: form.imageUrl || null }),
        });
      }

      const d = await res.json();
      if (!res.ok || d.error) throw new Error(d.error || "Save failed");
      reset();
      fetchBlogs();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  /* ── Delete ──────────────────────────────────────────────────────────── */
  const deleteBlog = async () => {
    if (!form.id || !confirm("Delete this blog post?")) return;
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}?id=${form.id}`, {
        method: "DELETE", credentials: "include",
        headers: { "X-CSRF-TOKEN": csrf },
      });
      const d = await res.json();
      if (!res.ok || d.error) throw new Error(d.error || "Delete failed");
      reset();
      fetchBlogs();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  /* ── Inline image helpers ────────────────────────────────────────────── */
  const insertImageByUrl = () => {
    const url = imgUrlRef.current?.value.trim();
    if (!url) return;
    editor?.chain().focus().setImage({ src: url }).run();
    if (imgUrlRef.current) imgUrlRef.current.value = "";
  };

  const insertImageByFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      editor?.chain().focus().setImage({ src: ev.target?.result as string }).run();
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  /* ── Cover preview src ───────────────────────────────────────────────── */
  const coverPreview = form.imageFile
    ? URL.createObjectURL(form.imageFile)
    : form.imageUrl
    ? (form.imageUrl.startsWith("/") ? `${BASE_URL}${form.imageUrl}` : form.imageUrl)
    : null;

  if (!mounted) return null;

  /* ── Render ──────────────────────────────────────────────────────────── */
  return (
    <>
      {/* ProseMirror base styles — move to globals.css if preferred */}
      <style>{`
        .ProseMirror { outline:none; min-height:300px; padding:1rem; cursor:text; }
        .ProseMirror > * + * { margin-top:0.6em; }
        .ProseMirror p       { margin:0; }
        .ProseMirror h1 { font-size:1.75rem; font-weight:700; }
        .ProseMirror h2 { font-size:1.4rem;  font-weight:700; }
        .ProseMirror h3 { font-size:1.15rem; font-weight:700; }
        .ProseMirror ul  { list-style:disc;    padding-left:1.5rem; }
        .ProseMirror ol  { list-style:decimal; padding-left:1.5rem; }
        .ProseMirror blockquote { border-left:3px solid #d1d5db; padding-left:1rem; color:#6b7280; }
        .ProseMirror code { background:#f3f4f6; padding:0.1em 0.3em; border-radius:3px; font-size:0.875em; font-family:monospace; }
        .ProseMirror pre  { background:#1e293b; color:#e2e8f0; padding:1rem; border-radius:6px; overflow-x:auto; }
        .ProseMirror pre code { background:none; padding:0; }
        .ProseMirror strong { font-weight:700; }
        .ProseMirror em     { font-style:italic; }
        .ProseMirror a      { color:#2563eb; text-decoration:underline; }
        .ProseMirror img    { max-width:100%; border-radius:4px; display:block; margin:0.5em 0; }
        .ProseMirror hr     { border:none; border-top:2px solid #e5e7eb; margin:1em 0; }
      `}</style>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-3 gap-6">

        {/* ── LEFT: blog list ───────────────────────────────────────────── */}
        <div className="col-span-1 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Blogs</h2>
            <button type="button" onClick={reset} className="text-sm text-blue-600 hover:underline">
              + New
            </button>
          </div>

          {blogs.length === 0 && <p className="text-sm text-gray-400">No blogs yet.</p>}

          {blogs.map((b) => (
            <div
              key={b.id}
              onClick={() => selectBlog(b)}
              className={`p-3 border rounded cursor-pointer transition-colors hover:bg-gray-50 ${
                form.id === b.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              {b.image && (
                <img
                  src={b.image.startsWith("/") ? `${BASE_URL}${b.image}` : b.image}
                  alt=""
                  className="w-full h-24 object-cover rounded mb-2"
                />
              )}
              <div className="font-semibold text-sm">{b.title}</div>
              {b.updated_at && (
                <div className="text-xs text-gray-400 mt-0.5">
                  {new Date(b.updated_at).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── RIGHT: editor ─────────────────────────────────────────────── */}
        <div className="col-span-2 space-y-4">

          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 rounded px-3 py-2 text-sm">
              {error}
            </div>
          )}

          {/* Title */}
          <input
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            placeholder="Post title…"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-semibold"
          />

          {/* ── Cover image panel ───────────────────────────────────────── */}
          <div className="border border-gray-200 rounded p-3 space-y-2 bg-gray-50">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Cover image</p>
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Paste an image URL…"
                value={form.imageUrl}
                onChange={(e) => setForm((p) => ({ ...p, imageUrl: e.target.value, imageFile: null }))}
                className="flex-1 min-w-0 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <span className="text-gray-400 text-sm self-center">or</span>
              <label className="cursor-pointer bg-white border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                Upload file
                <input
                  ref={coverFileRef}
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    setForm((p) => ({ ...p, imageFile: file, imageUrl: "" }));
                  }}
                />
              </label>
              {(form.imageUrl || form.imageFile) && (
                <button
                  type="button"
                  onClick={() => {
                    setForm((p) => ({ ...p, imageUrl: "", imageFile: null }));
                    if (coverFileRef.current) coverFileRef.current.value = "";
                  }}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
            {coverPreview && (
              <img
                src={coverPreview}
                alt="Cover preview"
                className="w-full max-h-48 object-cover rounded border border-gray-200"
              />
            )}
          </div>

          {/* ── Toolbar ─────────────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-1 p-2 border border-gray-200 rounded bg-gray-50">
            {/* Formatting */}
            <Btn onClick={() => editor?.chain().focus().toggleBold().run()}      active={editor?.isActive("bold")}      title="Bold"><strong>B</strong></Btn>
            <Btn onClick={() => editor?.chain().focus().toggleItalic().run()}    active={editor?.isActive("italic")}    title="Italic"><em>I</em></Btn>
            <Btn onClick={() => editor?.chain().focus().toggleStrike().run()}    active={editor?.isActive("strike")}    title="Strikethrough"><s>S</s></Btn>
            <Btn onClick={() => editor?.chain().focus().toggleCode().run()}      active={editor?.isActive("code")}      title="Inline code">{"<>"}</Btn>
            <SEP />
            {([1, 2, 3] as const).map((lvl) => (
              <Btn
                key={lvl}
                onClick={() => editor?.chain().focus().toggleHeading({ level: lvl }).run()}
                active={editor?.isActive("heading", { level: lvl })}
                title={`Heading ${lvl}`}
              >H{lvl}</Btn>
            ))}
            <SEP />
            <Btn onClick={() => editor?.chain().focus().toggleBulletList().run()}  active={editor?.isActive("bulletList")}  title="Bullet list">• —</Btn>
            <Btn onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive("orderedList")} title="Ordered list">1. —</Btn>
            <Btn onClick={() => editor?.chain().focus().toggleBlockquote().run()}  active={editor?.isActive("blockquote")}  title="Blockquote">❝</Btn>
            <Btn onClick={() => editor?.chain().focus().toggleCodeBlock().run()}   active={editor?.isActive("codeBlock")}   title="Code block">{"{ }"}</Btn>
            <Btn onClick={() => editor?.chain().focus().setHorizontalRule().run()} title="Divider">—</Btn>
            <SEP />

            {/* Inline image by URL */}
            <div className="flex items-center gap-1">
              <input
                ref={imgUrlRef}
                type="text"
                placeholder="Image URL"
                className="border border-gray-300 rounded px-2 py-0.5 text-xs w-32 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); insertImageByUrl(); } }}
              />
              <Btn onClick={insertImageByUrl} title="Insert image from URL">🖼</Btn>
            </div>

            {/* Inline image by file (base64 embedded in content) */}
            <label
              className="cursor-pointer px-2 py-1 rounded text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors select-none"
              title="Upload image into editor"
            >
              📁
              <input type="file" accept="image/*" className="hidden" onChange={insertImageByFile} />
            </label>
            <SEP />

            {/* Link */}
            <Btn
              active={editor?.isActive("link")}
              title="Add / edit link"
              onClick={() => {
                const prev = editor?.getAttributes("link").href ?? "";
                const url  = window.prompt("URL (empty to remove):", prev);
                if (url === null) return;
                url === ""
                  ? editor?.chain().focus().unsetLink().run()
                  : editor?.chain().focus().setLink({ href: url }).run();
              }}
            >🔗</Btn>
            <SEP />

            {/* Undo / Redo */}
            <Btn onClick={() => editor?.chain().focus().undo().run()} title="Undo">↩</Btn>
            <Btn onClick={() => editor?.chain().focus().redo().run()} title="Redo">↪</Btn>
          </div>

          {/* ── Editor area ─────────────────────────────────────────────── */}
          <div
            className="border border-gray-300 rounded bg-white overflow-auto"
            style={{ minHeight: 300 }}
            onClick={() => editor?.commands.focus()}
          >
            <EditorContent editor={editor} />
          </div>

          {/* ── Action buttons ───────────────────────────────────────────── */}
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-60 transition-colors font-medium"
            >
              {saving ? "Saving…" : form.id !== null ? "Update" : "Publish"}
            </button>
            <button
              type="button"
              onClick={reset}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            {form.id !== null && (
              <button
                type="button"
                onClick={deleteBlog}
                disabled={deleting}
                className="ml-auto bg-red-50 text-red-600 border border-red-300 px-4 py-2 rounded hover:bg-red-100 disabled:opacity-60 transition-colors"
              >
                {deleting ? "Deleting…" : "Delete post"}
              </button>
            )}
          </div>

          {/* ── Live preview ─────────────────────────────────────────────── */}
          <details className="border border-gray-200 rounded" open>
            <summary className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide cursor-pointer select-none bg-gray-50 rounded">
              Preview
            </summary>
            <div className="p-4">
              {form.title && <h1 className="text-2xl font-bold mb-4">{form.title}</h1>}
              {coverPreview && (
                <img src={coverPreview} alt="Cover" className="w-full max-h-64 object-cover rounded mb-4" />
              )}
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }}
              />
            </div>
          </details>

        </div>
      </div>
    </>
  );
}