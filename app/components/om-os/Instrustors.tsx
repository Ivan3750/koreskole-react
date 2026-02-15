import Image from "next/image";

const instructors = [
  { name: "Lars Jensen", exp: "20 års erfaring", img: "/instructor1.jpg" },
  { name: "Mikkel Hansen", exp: "15 års erfaring", img: "/instructor2.jpg" },
];

export const Instructors = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Mød vores kørelærere
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {instructors.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden border bg-background">
              
              <div className="relative h-80">
                <Image src={p.img} alt="" fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl">{p.name}</h3>
                <p className="text-muted-foreground">{p.exp}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};