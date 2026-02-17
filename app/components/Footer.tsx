"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const navItems = [
    { label: "Holdstart", href: "/holdstart-vejle" },
    { label: "Om os", href: "/om-os" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  const footerItems = [
    { label: "Priser", href: "/koerekort-b/priser" },
    { label: "Kørekort", href: "/koerekort-b/koerekort" },
    { label: "Teoriprøve", href: "/koerekort-b/teoriproeve" },
    { label: "Køreprøve", href: "/koerekort-b/koereproeve" },
  ];

  return (
    <footer
      className="py-16 bg-layout text-text-secondary"
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <span className="font-semibold text-lg text-text" style={{ color: "var(--color-text)" }}>
                  Lønbæks
                </span>
                <span className="text-sm block -mt-1 text-text-secondary" style={{ color: "var(--color-text-secondary)" }}>
                  Køreskole
                </span>
              </div>
            </div>
            <p className="leading-relaxed max-w-md" style={{ color: "var(--color-text-secondary)" }}>
              Din partner i tryg og sikker køreuddannelse i Vejle. Med over 40 års erfaring guider vi dig hele vejen til kørekortet.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>Navigation</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="block transition-colors text-text-secondary hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kørekort B links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>Kørekort B</h4>
            <ul className="space-y-3">
              {footerItems.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="block transition-colors text-text-secondary hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:24000000" className="flex items-center gap-2 transition-colors hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                  <Phone className="w-4 h-4" /> 24 00 00 00
                </a>
              </li>
              <li>
                <a href="mailto:loenbaeks@gmail.com" className="flex items-center gap-2 transition-colors hover:text-yellow-hover" style={{ color: "var(--color-text-secondary)" }}>
                  <Mail className="w-4 h-4" /> lønbæks@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span style={{ color: "var(--color-text-secondary)" }}>
                  Vestre Engvej 7<br />7100 Vejle
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>© {new Date().getFullYear()} Lønbæks Køreskole. Alle rettigheder forbeholdes.</p>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Kørelærer i Vejle siden 1984</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
