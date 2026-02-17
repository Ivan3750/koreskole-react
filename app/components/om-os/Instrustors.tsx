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
        <h2
          className="text-4xl font-bold text-center mb-20"
          style={{ color: "var(--color-text)" }}
        >
          Mød vores kørelærere
        </h2>

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
