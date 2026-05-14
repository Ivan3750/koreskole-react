"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SwitchLanguage from "../i18n/SwitchLanguage";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import "@/app/i18n";
import Button from "./ux/Button";


export const Header = () => {
  const { t } = useTranslation();
  const navItems = t("header.navItems", { returnObjects: true }) as any[];

  const params = useParams();
  const locale = params?.locale as string;

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md border-b" : "py-5"
        }`}
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-black) 85%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href={withLocale("/")}
            className="text-xl font-semibold tracking-tight"
            style={{ color: "var(--color-white)" }}
          >
            {t("header.logo")}
            <span style={{ color: "var(--color-yellow)" }}>
              {" "} {t("header.school")}
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item: any, index: number) => {
              if ("children" in item) {
                return (
                  <div key={index} className="relative group">
                    <span
                      className="cursor-pointer font-medium flex items-center"
                      style={{ color: "var(--color-white)" }}
                    >
                      {item.label}{" "}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </span>

                    <div className="absolute top-full left-0 mt-2 w-44 bg-black/90 backdrop-blur-xl border border-[var(--color-border)]  rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="flex flex-col py-2">
                        {item.children.map((child: any) => (
                          <Link
                            key={child.href}
                            href={withLocale(child.href)}
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
                  href={withLocale(item.href)}
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
            <SwitchLanguage />

            <Button
              label={t("header.cta")}
              link={withLocale("holdstart-vejle")}
            />

            <button
              className="lg:hidden"
              onClick={() => setOpen(true)}
              style={{ color: "var(--color-white)" }}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
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
                {t("header.menu")}
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
              {navItems.map((item: any, index: number) => {
                if ("children" in item) {
                  const isOpen = openDropdown === item.label;

                  return (
                    <div key={index} className="flex flex-col gap-4">
                      <button
                        onClick={() =>
                          setOpenDropdown(isOpen ? null : item.label)
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
                            {item.children.map((child: any) => (
                              <Link
                                key={child.href}
                                href={withLocale(child.href)}
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
                    href={withLocale(item.href)}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold"
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link href={withLocale("/holdstart-vejle")}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 bg-yellow-400 text-black rounded-full py-4 text-md font-semibold px-4"
                >
                  {t("header.cta")}
                </motion.button>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
