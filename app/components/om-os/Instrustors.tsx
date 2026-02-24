"use client";

import Image from "next/image";

export const Instructors = () => {
  const instructors = [
    {
      name: "Anna Marie Lønbæk",
      exp: "20 års erfaring som kørelærer i Vejle",
      img: "/instructor1.jpg",
    },
    {
      name: "Michael Lønbæk",
      exp: "15 års erfaring med kørekort B",
      img: "/instructor2.jpg",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{
              color: "var(--color-yellow)",
              backgroundColor: "rgba(var(--color-yellow-rgb), 0.1)",
            }}
          >
    Kørelærere
          </span>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
    Mød vores kørelærere
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
    Vores kørelærere er erfarne, tålmodige og dedikerede til at give dig den bedst mulige undervisning.  
    Du får personlig vejledning og tryg støtte gennem hele dit kørekortforløb.          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {instructors.map((p, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden border bg-white/60 backdrop-blur-sm"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="relative h-[420px]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-semibold mb-2">
                  {p.name}
                </h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {p.exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
