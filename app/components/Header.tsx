"use client";

import { useState } from "react";
import { Button, Drawer } from "antd";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import Link from "next/link";

const navItems = [
  { label: "Forside", href: "/" },
  { label: "Om os", href: "/om-os" },
  { label: "Kurser", href: "/kurser" },
  { label: "Priser", href: "/priser" },
  { label: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-bg-layout) 85%, transparent)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-8xl mx-auto  px-4 md:px-10  xl:px-20  h-20 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          Lønbæks<span style={{ color: "var(--color-yellow)" }}> Køreskole</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-medium transition-opacity  hover:opacity-100"
              style={{ color: "var(--color-text)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

      {    <Button
            type="primary"
            className="!hidden md:!flex"
            style={{
              backgroundColor: "var(--color-yellow)",
              borderColor: "var(--color-yellow)",
              color: "#000",
            }}
          >
            Tilmeld dig
          </Button>}

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{ color: "var(--color-text)" }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={<X />}
        styles={{
          body: {
            background: "var(--color-bg-layout)",
          },
        }}
      >
        <nav className="flex flex-col gap-8 pt-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium"
              style={{ color: "var(--color-text)" }}
            >
              {item.label}
            </a>
          ))}

          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "var(--color-yellow)",
              borderColor: "var(--color-yellow)",
              color: "#000",
            }}
          >
            Tilmeld dig
          </Button>
        </nav>
      </Drawer>
    </header>
  );
};
