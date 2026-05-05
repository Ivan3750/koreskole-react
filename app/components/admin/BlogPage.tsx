"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { BASE_URL } from "@/app/lib/api"
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
  imageUrl: string;  
  imageFile: File | null; 
};

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
        e.preventDefault(); 
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

export default function BlogPage() {

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

  useEffect(() => {
    setMounted(true);
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/session.php`, { credentials: "include" });
        const d = await res.json();
        setCsrf(d.csrf || "");
      } catch(err) { console.log(err)  }
      fetchBlogs();
    })();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${BASE_URL}/blog.php`, { credentials: "include" });
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

  const save = async () => {
    if (!editor) return;
    setError(null);
    const title   = form.title.trim();
    const content = editor.getHTML();
    if (!title)                       { setError("Title is required.");   return; }
    if (!content || content === "<p></p>") { setError("Content is required."); return; }

    setSaving(true);
    try {
      const url = form.id !== null ? `${BASE_URL}/blog.php?id=${form.id}` : `${BASE_URL}/blog.php`;
      let res: Response;

      if (form.imageFile) {
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

  const deleteBlog = async () => {
    if (!form.id || !confirm("Delete this blog post?")) return;
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/blog.php?id=${form.id}`, {
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

  const coverPreview = form.imageFile
    ? URL.createObjectURL(form.imageFile)
    : form.imageUrl
    ? (form.imageUrl.startsWith("/") ? `${BASE_URL}${form.imageUrl}` : form.imageUrl)
    : null;

  if (!mounted) return null;

  return (
  <>
    <style>{`
      .ProseMirror { outline:none; min-height:300px; padding:1rem; cursor:text; }
      .ProseMirror img { max-width:100%; border-radius:6px; margin:0.5rem 0; }
    `}</style>

    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-12 gap-8">

      <div className="col-span-12 md:col-span-4 lg:col-span-3">
        <div className="bg-white rounded-2xl shadow p-4 space-y-4">

          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Posts</h2>
            <button
              onClick={reset}
              className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100"
            >
              + New
            </button>
          </div>

          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {blogs.length === 0 && (
              <p className="text-sm text-gray-400">No posts yet</p>
            )}

            {blogs.map((b) => (
              <div
                key={b.id}
                onClick={() => selectBlog(b)}
                className={`p-3 rounded-xl border cursor-pointer transition
                  ${
                    form.id === b.id
                      ? "bg-blue-50 border-blue-400"
                      : "hover:bg-gray-50"
                  }`}
              >
                {b.image && (
                  <img
                    src={b.image.startsWith("/") ? `${BASE_URL}${b.image}` : b.image}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                )}
                <div className="font-medium text-sm">{b.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-6">

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded-xl">
            {error}
          </div>
        )}

        <input
          value={form.title}
          onChange={(e) => setForm(p => ({ ...p, title: e.target.value }))}
          placeholder="Write your title..."
          className="w-full text-3xl font-bold border-none outline-none"
        />

        <div className="bg-white p-5 rounded-2xl shadow space-y-3">
          <div className="text-sm font-medium text-gray-500">Cover Image</div>

          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Paste image URL..."
              value={form.imageUrl}
              onChange={(e) =>
                setForm(p => ({ ...p, imageUrl: e.target.value, imageFile: null }))
              }
              className="flex-1 border rounded px-3 py-2 text-sm"
            />

            <label className="bg-gray-100 px-3 py-2 rounded cursor-pointer hover:bg-gray-200 text-sm">
              Upload
              <input
                type="file"
                className="hidden"
                onChange={(e) =>
                  setForm(p => ({
                    ...p,
                    imageFile: e.target.files?.[0] ?? null,
                    imageUrl: "",
                  }))
                }
              />
            </label>
          </div>

          {coverPreview && (
            <img
              src={coverPreview}
              className="w-full max-h-64 object-cover rounded-xl"
            />
          )}
        </div>

        <div className="sticky top-4 z-10 bg-white border rounded-xl p-2 flex flex-wrap gap-1 shadow-sm">

          <Btn onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive("bold")}>B</Btn>
          <Btn onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive("italic")}>I</Btn>
          <Btn onClick={() => editor?.chain().focus().toggleStrike().run()} active={editor?.isActive("strike")}>S</Btn>

          <SEP />

          <Btn onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}>H1</Btn>
          <Btn onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>

          <SEP />

          <Btn onClick={() => editor?.chain().focus().toggleBulletList().run()}>•</Btn>
          <Btn onClick={() => editor?.chain().focus().toggleOrderedList().run()}>1.</Btn>

          <SEP />

          <Btn onClick={() => editor?.chain().focus().undo().run()}>↩</Btn>
          <Btn onClick={() => editor?.chain().focus().redo().run()}>↪</Btn>
        </div>

        <div className="bg-white border rounded-2xl shadow">
          <EditorContent editor={editor} />
        </div>

 
        <div className="flex items-center gap-3">

          <button
            onClick={save}
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            {saving ? "Saving..." : form.id ? "Update" : "Publish"}
          </button>

          <button
            onClick={reset}
            className="bg-gray-200 px-5 py-2 rounded-xl hover:bg-gray-300"
          >
            Cancel
          </button>

          {form.id && (
            <button
              onClick={deleteBlog}
              className="ml-auto bg-red-100 text-red-600 px-5 py-2 rounded-xl hover:bg-red-200"
            >
              Delete
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <div className="text-sm text-gray-400">Preview</div>

          {form.title && (
            <h1 className="text-3xl font-bold">{form.title}</h1>
          )}

          {coverPreview && (
            <img src={coverPreview} className="rounded-xl" />
          )}

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }}
          />
        </div>

      </div>
    </div>
  </>
);
}