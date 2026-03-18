"use client";

import Image from "next/image";
/* import Anna_Marie_Lønbæk_img from "../../assets/Anna-Marie_Lønbæk.jpeg";
 */import Michael_Lønbæk_img from "../../assets/Michael_Lønbæk.jpeg";
import Anna_Marie_Lønbæk_img from "../../assets/gulbil_3.jpeg";

const Instructors = () => {
  const instructors = [
    {
      name: "Anna Marie Lønbæk",
      exp: "29 års erfaring som kørelærer i Vejle",
      img: Anna_Marie_Lønbæk_img,
    },
    {
      name: "Michael Lønbæk",
      exp: "39 års erfaring med kørekort B",
      img: Michael_Lønbæk_img,
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
            Vores kørelærere er erfarne, tålmodige og dedikerede til at give dig
            den bedst mulige undervisning. Du får personlig vejledning og tryg
            støtte gennem hele dit kørekortforløb.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {instructors.map((p, i) => (
            <div
              key={i}
      style={{ backgroundColor: "var(--color-bg-layout)" }}
              className="group rounded-3xl overflow-hidden   transition-all duration-500  "
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700  "
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="p-8 text-center">
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


export default Instructors