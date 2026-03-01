"use client";

import React from "react";

type Page = "courses" | "blog" | "info" | "settings";

type Props = {
  activePage: Page;
  setActivePage: React.Dispatch<React.SetStateAction<Page>>;
};

export default function Sidebar({ activePage, setActivePage }: Props) {
  const pages: { label: string; key: Page }[] = [
    { label: "Courses", key: "courses" },
    { label: "Blog", key: "blog" },
    { label: "Køreskolens information", key: "info" },
    { label: "Indstillinger", key: "settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Admin</h1>
      <nav className="flex flex-col gap-4">
        {pages.map((page) => (
          <button
            key={page.key}
            onClick={() => setActivePage(page.key)}
            className={`
              text-left px-4 py-2 rounded-lg font-medium transition 
              ${
                activePage === page.key
                  ? "bg-yellow-400 text-black"
                  : "hover:bg-gray-800 text-white/80"
              }
            `}
          >
            {page.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}