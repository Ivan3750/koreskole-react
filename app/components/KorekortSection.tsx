"use client";

import Image from "next/image";
import Link from "next/link";
import school from "../assets/school_inside_2.jpeg"
export default function KorekortSection() {
  return (
    <section className="py-28" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div className="space-y-6">

          <span className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
            Kørekort i Vejle
          </span>

          <h2
            className="text-4xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Er du i tvivl om kørekortforløbet? Vi kan hjælpe
          </h2>

          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hvis du ikke er helt sikker på, hvordan kørekortforløbet fungerer, tilbyder vi en
            <strong> gratis informationsmøde</strong>. Her gennemgår vi hele forløbet, 
            svarer på dine spørgsmål og hjælper dig med at planlægge dine teoritimer og kørelektioner – helt uden forpligtelser.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 pt-2">

            <li className="flex gap-3">
              <span className="text-yellow-500">✓</span>
              <span>Gratis informationsmøde uden forpligtelser</span>
            </li>

            <li className="flex gap-3">
              <span className="text-yellow-500">✓</span>
              <span>Struktureret teori- og køreundervisning</span>
            </li>

            <li className="flex gap-3">
              <span className="text-yellow-500">✓</span>
              <span>Moderne biler og erfarne kørelærere</span>
            </li>

          </ul>

          {/* CTA */}
          <div className="flex gap-4 pt-4">

            <Link
              href="/priser"
              className="px-8 py-4 rounded-xl font-semibold"
              style={{ background: "var(--color-yellow)", color: "#000" }}
            >
               Book gratis informationsmøde
            </Link>

            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-xl border"
              style={{ borderColor: "var(--color-border)" }}
            >
             Se kørekortforløb
            </Link>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden">
          <Image
            src={school.src}
            alt="Køretime"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}