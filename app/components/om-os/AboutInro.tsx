"use client";

import Image from "next/image";
/* import aboutImg from "@/app/assets/about.jpg";
 */
export const AboutIntro = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            En køreskole med erfaring
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Lønbæks Køreskole har uddannet tusindvis af elever siden 1984.
            Vi fokuserer på personlig undervisning, tryghed og høj beståelsesrate.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Vores mål er ikke kun at få dig igennem prøven — men at gøre dig til en sikker bilist.
          </p>
        </div>

        <div className="relative h-[420px] rounded-2xl overflow-hidden">
{/*           <Image src={aboutImg} alt="" fill className="object-cover" />
 */}        </div>
      </div>
    </section>
  );
};