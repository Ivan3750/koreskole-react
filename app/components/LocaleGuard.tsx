"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const locales = ["da", "en"];
const defaultLocale = "da";

export default function LocaleGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];

    if (!locales.includes(first)) {
      const restPath = segments.slice(1).join("/");
      router.replace(`/${defaultLocale}/${restPath}`);
    }
  }, [pathname, router]);

  return null;
}