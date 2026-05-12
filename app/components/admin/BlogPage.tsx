"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

import { BASE_URL } from "@/app/lib/api";

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
      className="px-3 py-2 rounded-xl text-sm font-medium transition"
      style={{
        border: "1px solid var(--color-border)",
        backgroundColor: active
          ? "var(--color-primary)"
          : "var(--color-bg-elevated)",
        color: active ? "#111111" : "var(--color-text)",
      }}
    >
      {children}
    </button>
  );
}

const SEP = () => (
  <span
    className="w-px self-stretch mx-1"
    style={{
      backgroundColor: "var(--color-border)",
    }}
  />
);

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [csrf, setCsrf] = useState("");
  const [mounted, setMounted] = useState(false);

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    id: null,
    title: "",
    imageUrl: "",
    imageFile: null,
  });

  const imgUrlRef = useRef<HTMLInputElement>(null);
  const coverFileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],

    content: "<p></p>",

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class: "min-h-[300px] p-5 outline-none",
        style: "cursor:text;",
      },
    },
  });

  useEffect(() => {
    setMounted(true);

    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/session.php`, {
          credentials: "include",
        });

        const d = await res.json();

        setCsrf(d.csrf || "");
      } catch (err) {
        console.log(err);
      }

      fetchBlogs();
    })();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${BASE_URL}/blog.php`, {
        credentials: "include",
      });

      const d = await res.json();

      setBlogs(d.blogs || []);
    } catch {
      setError("Could not load blogs.");
    }
  };

  const selectBlog = (b: Blog) => {
    setError(null);

    setForm({
      id: b.id,
      title: b.title,
      imageUrl: b.image ?? "",
      imageFile: null,
    });

    editor?.commands.setContent(b.content || "<p></p>");
  };

  const reset = useCallback(() => {
    setError(null);

    setForm({
      id: null,
      title: "",
      imageUrl: "",
      imageFile: null,
    });

    editor?.commands.setContent("<p></p>");
    editor?.commands.focus();

    if (coverFileRef.current) {
      coverFileRef.current.value = "";
    }
  }, [editor]);

  const save = async () => {
    if (!editor) return;

    setError(null);

    const title = form.title.trim();
    const content = editor.getHTML();

    if (!title) {
      setError("Title is required.");
      return;
    }

    if (!content || content === "<p></p>") {
      setError("Content is required.");
      return;
    }

    setSaving(true);

    try {
      const url =
        form.id !== null
          ? `${BASE_URL}/blog.php?id=${form.id}`
          : `${BASE_URL}/blog.php`;

      let res: Response;

      if (form.imageFile) {
        const fd = new FormData();

        fd.append("title", title);
        fd.append("content", content);
        fd.append("image", form.imageFile);

        res = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "X-CSRF-TOKEN": csrf,
          },
          body: fd,
        });
      } else {
        res = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrf,
          },
          body: JSON.stringify({
            title,
            content,
            image: form.imageUrl || null,
          }),
        });
      }

      const d = await res.json();

      if (!res.ok || d.error) {
        throw new Error(d.error || "Save failed");
      }

      reset();

      fetchBlogs();
    } catch (e: unknown) {
      setError(
        e instanceof Error
          ? e.message
          : "Save failed"
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteBlog = async () => {
    if (!form.id || !confirm("Delete this blog post?")) {
      return;
    }

    setDeleting(true);
    setError(null);

    try {
      const res = await fetch(
        `${BASE_URL}/blog.php?id=${form.id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "X-CSRF-TOKEN": csrf,
          },
        }
      );

      const d = await res.json();

      if (!res.ok || d.error) {
        throw new Error(d.error || "Delete failed");
      }

      reset();

      fetchBlogs();
    } catch (e: unknown) {
      setError(
        e instanceof Error
          ? e.message
          : "Delete failed"
      );
    } finally {
      setDeleting(false);
    }
  };

  const insertImageByUrl = () => {
    const url = imgUrlRef.current?.value.trim();

    if (!url) return;

    editor?.chain().focus().setImage({ src: url }).run();

    if (imgUrlRef.current) {
      imgUrlRef.current.value = "";
    }
  };

  const insertImageByFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (ev) => {
      editor
        ?.chain()
        .focus()
        .setImage({
          src: ev.target?.result as string,
        })
        .run();
    };

    reader.readAsDataURL(file);

    e.target.value = "";
  };

  const coverPreview = form.imageFile
    ? URL.createObjectURL(form.imageFile)
    : form.imageUrl
    ? form.imageUrl.startsWith("/")
      ? `${BASE_URL}${form.imageUrl}`
      : form.imageUrl
    : null;

  if (!mounted) return null;

  return (
    <>
      <style>{`
        .ProseMirror {
          outline: none;
          min-height: 300px;
          padding: 1.25rem;
          cursor: text;
          color: var(--color-text);
        }

        .ProseMirror p {
          color: var(--color-text);
        }

        .ProseMirror h1,
        .ProseMirror h2,
        .ProseMirror h3,
        .ProseMirror h4 {
          color: var(--color-text);
        }

        .ProseMirror strong {
          color: var(--color-text);
        }

        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5rem;
        }

        .ProseMirror img {
          max-width: 100%;
          border-radius: 16px;
          margin: 1rem 0;
        }

        .ProseMirror a {
          color: var(--color-primary);
        }

        .ProseMirror blockquote {
          border-left: 3px solid var(--color-border);
          padding-left: 1rem;
          color: var(--color-text-secondary);
        }

        .prose {
          color: var(--color-text);
        }

        .prose h1,
        .prose h2,
        .prose h3,
        .prose h4,
        .prose p,
        .prose strong,
        .prose li {
          color: var(--color-text);
        }

        .prose a {
          color: var(--color-primary);
        }
      `}</style>

      <div
        className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-12 gap-8"
        style={{
          backgroundColor: "var(--color-bg-layout)",
          color: "var(--color-text)",
        }}
      >
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor:
                "var(--color-bg-elevated)",

              border:
                "1px solid var(--color-border)",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">
                Posts
              </h2>

              <button
                onClick={reset}
                className="px-4 py-2 rounded-xl text-sm font-medium transition"
                style={{
                  backgroundColor:
                    "var(--color-primary)",
                  color: "#111111",
                }}
              >
                + New
              </button>
            </div>

            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {blogs.length === 0 && (
                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  No posts yet
                </p>
              )}

              {blogs.map((b) => (
                <div
                  key={b.id}
                  onClick={() => selectBlog(b)}
                  className="p-3 rounded-2xl cursor-pointer transition"
                  style={{
                    border:
                      form.id === b.id
                        ? "1px solid var(--color-primary)"
                        : "1px solid var(--color-border)",

                    backgroundColor:
                      form.id === b.id
                        ? "var(--color-yellow-bg)"
                        : "var(--color-bg-elevated)",
                  }}
                >
                  {b.image && (
                    <img
                      src={
                        b.image.startsWith("/")
                          ? `${BASE_URL}${b.image}`
                          : b.image
                      }
                      className="w-full h-28 object-cover rounded-xl mb-3"
                    />
                  )}

                  <div className="font-medium text-sm">
                    {b.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-6">
          {error && (
            <div
              className="px-4 py-3 rounded-2xl"
              style={{
                backgroundColor:
                  "rgba(239,68,68,0.12)",

                border:
                  "1px solid rgba(239,68,68,0.2)",

                color: "var(--color-danger)",
              }}
            >
              {error}
            </div>
          )}

          <input
            value={form.title}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                title: e.target.value,
              }))
            }
            placeholder="Write your title..."
            className="w-full text-4xl font-bold outline-none bg-transparent"
            style={{
              color: "var(--color-text)",
            }}
          />

          <div
            className="p-6 rounded-2xl space-y-4"
            style={{
              backgroundColor:
                "var(--color-bg-elevated)",

              border:
                "1px solid var(--color-border)",
            }}
          >
            <div
              className="text-sm font-medium"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              Cover Image
            </div>

            <div className="flex gap-3 flex-wrap">
              <input
                type="text"
                placeholder="Paste image URL..."
                value={form.imageUrl}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    imageUrl: e.target.value,
                    imageFile: null,
                  }))
                }
                className="flex-1 px-4 py-3 rounded-xl outline-none"
                style={{
                  backgroundColor:
                    "var(--color-input-bg)",

                  color: "var(--color-text)",

                  border:
                    "1px solid var(--color-border)",
                }}
              />

              <label
                className="px-4 py-3 rounded-xl cursor-pointer transition text-sm font-medium"
                style={{
                  backgroundColor: "var(--color-bg)",

                  border:
                    "1px solid var(--color-border)",

                  color: "var(--color-text)",
                }}
              >
                Upload

                <input
                  type="file"
                  className="hidden"
                  ref={coverFileRef}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      imageFile:
                        e.target.files?.[0] ?? null,
                      imageUrl: "",
                    }))
                  }
                />
              </label>
            </div>

            {coverPreview && (
              <img
                src={coverPreview}
                className="w-full max-h-72 object-cover rounded-2xl"
              />
            )}
          </div>

          <div
            className="sticky top-4 z-10 rounded-2xl p-3 flex flex-wrap gap-2"
            style={{
              backgroundColor:
                "var(--color-bg-elevated)",

              border:
                "1px solid var(--color-border)",

              backdropFilter: "blur(10px)",
            }}
          >
            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              active={editor?.isActive("bold")}
            >
              B
            </Btn>

            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleItalic()
                  .run()
              }
              active={editor?.isActive("italic")}
            >
              I
            </Btn>

            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleStrike()
                  .run()
              }
              active={editor?.isActive("strike")}
            >
              S
            </Btn>

            <SEP />

            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({
                    level: 1,
                  })
                  .run()
              }
            >
              H1
            </Btn>

            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({
                    level: 2,
                  })
                  .run()
              }
            >
              H2
            </Btn>

            <SEP />

            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleBulletList()
                  .run()
              }
            >
              •
            </Btn>

            <Btn
              onClick={() =>
                editor
                  ?.chain()
                  .focus()
                  .toggleOrderedList()
                  .run()
              }
            >
              1.
            </Btn>

            <SEP />

            <Btn
              onClick={() =>
                editor?.chain().focus().undo().run()
              }
            >
              ↩
            </Btn>

            <Btn
              onClick={() =>
                editor?.chain().focus().redo().run()
              }
            >
              ↪
            </Btn>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor:
                "var(--color-bg-elevated)",

              border:
                "1px solid var(--color-border)",
            }}
          >
            <EditorContent editor={editor} />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={save}
              disabled={saving}
              className="px-6 py-3 rounded-xl font-semibold transition disabled:opacity-50"
              style={{
                backgroundColor:
                  "var(--color-primary)",
                color: "#111111",
              }}
            >
              {saving
                ? "Saving..."
                : form.id
                ? "Update"
                : "Publish"}
            </button>

            <button
              onClick={reset}
              className="px-6 py-3 rounded-xl transition"
              style={{
                backgroundColor:
                  "var(--color-bg-elevated)",

                border:
                  "1px solid var(--color-border)",

                color: "var(--color-text)",
              }}
            >
              Cancel
            </button>

            {form.id && (
              <button
                onClick={deleteBlog}
                disabled={deleting}
                className="ml-auto px-6 py-3 rounded-xl transition"
                style={{
                  backgroundColor:
                    "rgba(239,68,68,0.12)",

                  border:
                    "1px solid rgba(239,68,68,0.2)",

                  color: "var(--color-danger)",
                }}
              >
                {deleting
                  ? "Deleting..."
                  : "Delete"}
              </button>
            )}
          </div>

          <div
            className="rounded-2xl p-6 space-y-5"
            style={{
              backgroundColor:
                "var(--color-bg-elevated)",

              border:
                "1px solid var(--color-border)",
            }}
          >
            <div
              className="text-sm"
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              Preview
            </div>

            {form.title && (
              <h1 className="text-4xl font-bold">
                {form.title}
              </h1>
            )}

            {coverPreview && (
              <img
                src={coverPreview}
                className="rounded-2xl"
              />
            )}

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: editor?.getHTML() || "",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}