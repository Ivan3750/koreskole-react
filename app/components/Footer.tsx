"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  ShieldCheck,
  FileText,
  Building2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import "@/app/i18n";
import WebHjerte from "./ux/WebHjerte";

const Footer = () => {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string;

  const withLocale = (path: string) => {
    if (!locale) return path;
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const navItems = t("footer.navItems", {
    returnObjects: true,
  }) as Array<{ label: string; href: string }>;

  const footerItems = t("footer.footerItems", {
    returnObjects: true,
  }) as Array<{ label: string; href: string }>;

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        backgroundColor: "var(--color-bg-layout)",
        borderColor: "var(--color-border)",
      }}
    >
    
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              

              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("footer.logo")}
                </h3>

                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t("footer.school")}
                </p>
              </div>
            </div>

            <p
              className="leading-relaxed max-w-md text-base"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("footer.description")}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.facebook.com/koreskolennu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-yellow-400/10"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-semibold text-lg mb-5"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("footer.navigation")}
            </h4>

            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={withLocale(item.href)}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info + Legal */}
          <div>
            <h4
              className="font-semibold text-lg mb-5"
              style={{ color: "var(--color-yellow)" }}
            >
              {t("footer.contact")}
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${t("footer.phone").replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-yellow-hover"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {t("footer.phone")}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="flex items-center gap-3 transition-colors hover:text-yellow-hover"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {t("footer.email")}
                </a>
              </li>

              <li
                className="flex items-start gap-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </li>

              {/* CVR */}
              <li
                className="flex items-center gap-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span>CVR: 43426087</span>
              </li>
            </ul>

            {/* Legal links */}
            <div className="mt-8 space-y-3">
              <Link
                href={withLocale("/handelsbetingelser")}
                className="flex items-center gap-2 hover:text-yellow-hover transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <FileText className="w-4 h-4" />
                Handelsbetingelser
              </Link>

              <Link
                href={withLocale("/privatlivspolitik")}
                className="flex items-center gap-2 hover:text-yellow-hover transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <ShieldCheck className="w-4 h-4" />
                Privatlivspolitik
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mt-14 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-sm text-center lg:text-left"
            style={{ color: "var(--color-text-secondary)" }}
          >
            © {new Date().getFullYear()} {t("footer.logo")}{" "}
            {t("footer.school")}. {t("footer.copyright")}
          </p>

          <div className="flex items-center gap-3">

            <p
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>

      <WebHjerte />
    </footer>
  );
};

export default Footer;