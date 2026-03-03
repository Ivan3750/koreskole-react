"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";

import flagDK from "@/app/assets/denmark-flag.png";
import flagGB from "@/app/assets/great-britain-flag.png";

const languages = [
  { code: "da", flag: flagDK },
  { code: "en", flag: flagGB },
];

export default function SwitchLanguage() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    // міняємо перший сегмент URL
    const segments = pathname.split("/");
    segments[1] = lang;

    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md"
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.code}
          width={24}
          height={16}
          className="rounded-sm"
        />
      </button>

      {open && (
        <div className="absolute mt-2 right-0 flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg z-50 overflow-hidden">
          {languages
            .filter((l) => l.code !== currentLang.code)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="p-2 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Image
                  src={lang.flag}
                  alt={lang.code}
                  width={24}
                  height={16}
                  className="rounded-sm"
                />
              </button>
            ))}
        </div>
      )}
    </div>
  );
}