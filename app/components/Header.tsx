"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Kørekort B",
    children: [
      { label: "Kørekort", href: "/koerekort-b/koerekort-vejle" },
      { label: "Teoriprøve", href: "/koerekort-b/teoriproeve-vejle" },
      { label: "Køreprøve", href: "/koerekort-b/koereproeve-vejle" },
      { label: "Priser", href: "/koerekort-b/priser" },
    ],
  },
  { label: "Holdstart", href: "/holdstart-vejle" },
  { label: "Om os", href: "/om-os" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md border-b" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--color-black) 85%, transparent)"
            : "transparent",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
            style={{ color: "var(--color-white)" }}
          >
            Lønbæks
            <span style={{ color: "var(--color-yellow)" }}>
              {" "}
              Køreskole
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => {
              if ("children" in item) {
                return (
                  <div key={index} className="relative group">
                    <span
                      className="cursor-pointer font-medium"
                      style={{ color: "var(--color-white)" }}
                    >
                      {item.label}
                    </span>

                    <div className="absolute top-full left-0 mt-4 w-60 bg-black/90 backdrop-blur-xl border rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="flex flex-col py-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-6 py-3 hover:bg-white/5 transition-colors"
                            style={{ color: "var(--color-white)" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium"
                  style={{ color: "var(--color-white)" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <CTAButton />
            <button
              className="lg:hidden"
              onClick={() => setOpen(true)}
              style={{ color: "var(--color-text)" }}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black"
          >
            <div className="flex justify-between items-center px-6 py-6">
              <span className="text-xl font-semibold text-white">
                Menu
              </span>
              <button onClick={() => setOpen(false)}>
                <X className="w-7 h-7 text-white" />
              </button>
            </div>

            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 px-8 pt-10 text-white"
            >
              {navItems.map((item, index) => {
                if ("children" in item) {
                  const isOpen = openDropdown === item.label;
                  return (
                    <div key={index} className="flex flex-col gap-4">
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            isOpen ? null : item.label
                          )
                        }
                        className="flex items-center justify-between text-2xl font-semibold"
                      >
                        {item.label}
                        <ChevronDown
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 pl-4 text-lg"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold"
                  >
                    {item.label}
                  </Link>
                );
              })}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-yellow-400 text-black rounded-full py-4 text-lg font-semibold"
              >
                Tilmeld hold
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CTAButton = () => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.96 }}
    className="hidden lg:flex items-center gap-2 px-6 h-11 rounded-full font-medium shadow-md cursor-pointer"
    style={{
      backgroundColor: "var(--color-yellow)",
      color: "#000",
    }}
  >
    Tilmeld hold
    <motion.div whileHover={{ rotate: 45 }}>
      <ArrowUpRight size={16} />
    </motion.div>
  </motion.button>
);
