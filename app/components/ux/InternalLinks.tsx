import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InternalLink {
  label: string;
  href: string;
  desc?: string;
}

interface InternalLinksProps {
  title: string;
  links: InternalLink[];
  locale: string;
}

export default function InternalLinks({ title, links, locale }: InternalLinksProps) {
  const withLocale = (path: string) =>
    `/${locale}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <p
          className="text-xs font-bold uppercase tracking-widest mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {title}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(({ label, href, desc }) => (
            <Link
              key={href}
              href={withLocale(href)}
              className="group flex flex-col justify-between gap-4 p-5 rounded-2xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)",
              }}
            >
              <div>
                <span
                  className="block font-bold text-base mb-1"
                  style={{ color: "var(--color-text)" }}
                >
                  {label}
                </span>
                {desc && (
                  <span
                    className="block text-xs leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {desc}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{ color: "var(--color-yellow)" }}
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
