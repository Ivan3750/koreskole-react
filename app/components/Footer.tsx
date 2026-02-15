"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "var(--color-bg-layout)", color: "var(--color-text-secondary)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
             
              <div>
                <span className="font-semibold text-lg" style={{ color: "var(--color-text)" }}>Lønbæks</span>
                <span className="text-sm block -mt-1" style={{ color: "var(--color-text-secondary)" }}>
                  Køreskole
                </span>
              </div>
            </div>
            <p className="leading-relaxed max-w-md" style={{ color: "var(--color-text-secondary)" }}>
              Din partner i tryg og sikker køreuddannelse i Vejle. 
              Med over 40 års erfaring guider vi dig hele vejen til kørekortet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Forside","Om Os","Priser","Biler","Kontakt"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="transition-colors"
                    style={{ color: "var(--color-text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-yellow-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--color-yellow)" }}>
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:23748780"
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-yellow-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                >
                  <Phone className="w-4 h-4" />
                  24 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:jorgen@norretorv.dk"
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-yellow-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                >
                  <Mail className="w-4 h-4" />
                lønbæks@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2" style={{ color: "var(--color-text-secondary)" }}>
                <MapPin className="w-4 h-4 mt-0.5" />
                Vestre Engvej 7<br />7100 Vejle
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
        >
          <p className="text-sm">© {new Date().getFullYear()} Nørretorv Køreskole. Alle rettigheder forbeholdes.</p>
          <p className="text-sm">Kørelærer i Vejle siden 1984</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
