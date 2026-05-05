"use client";
import Image from "next/image";
import Michael_Lønbæk_img from "../../assets/Michael_Lønbæk.jpeg";
import Anna_Marie_Lønbæk_img from "../../assets/gulbil_3.jpeg";

const instructors = [
  { name: "Anna Marie Lønbæk", exp: "29 år", img: Anna_Marie_Lønbæk_img },
  { name: "Michael Lønbæk", exp: "39 år", img: Michael_Lønbæk_img },
];

const Instructors = () => {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ color: "var(--color-yellow)", backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)" }}
          >
            Kørelærere
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Mød vores kørelærere
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Vores kørelærere er erfarne, tålmodige og dedikerede til at give dig
            den bedst mulige undervisning.
          </p>
        </div>

        {/* Full-width two-panel layout */}
        <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden" style={{ minHeight: "520px" }}>
          {instructors.map((p, i) => (
            <div key={i} className="group relative flex-1 overflow-hidden" style={{ minHeight: "400px" }}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Divider line between panels */}
              {i === 0 && (
                <div
                  className="hidden md:block absolute top-0 right-0 w-px h-full z-10"
                  style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.4)" }}
                />
              )}

              {/* Name at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-yellow)" }}>
                  {p.exp} erfaring
                </p>
                <h3 className="text-2xl font-bold text-white leading-tight">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instructors;