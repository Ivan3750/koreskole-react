"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

const Footer = () => {
  const { t } = useTranslation();

  const navItems = t("footer.navItems", { returnObjects: true }) as Array<{ label: string; href: string }>;
  const footerItems = t("footer.footerItems", { returnObjects: true }) as Array<{ label: string; href: string }>;

  return (
    <footer className="py-16" style={{ backgroundColor: "var(--color-bg-layout)" }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <span className="font-semibold text-lg" style={{ color: "var(--color-text)" }}>
                  {t("footer.logo")}
                </span>
                <span className="text-sm block -mt-1" style={{ color: "var(--color-text-secondary)" }}>
                  Køreskole
                </span>
              </div>
            </div>
            <p className="leading-relaxed max-w-md" style={{ color: "var(--color-text-secondary)" }}>
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-3">
              {navItems.map((item: any) => (
                <li key={item.label}>
                  <Link href={item.href} className="block hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kørekort B links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>
              {t("footer.korekrtB")}
            </h4>
            <ul className="space-y-3">
              {footerItems.map((item: any) => (
                <li key={item.label}>
                  <Link href={item.href} className="block hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${t("footer.phone").replace(/\s/g,"")}`} className="flex items-center gap-2 hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                  <Phone className="w-4 h-4" /> {t("footer.phone")}
                </a>
              </li>
              <li>
                <a href={`mailto:${t("footer.email")}`} className="flex items-center gap-2 hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                  <Mail className="w-4 h-4" /> {t("footer.email")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {t("footer.address")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            © {new Date().getFullYear()} {t("footer.logo")} Køreskole. {t("footer.copyright")}
          </p>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;