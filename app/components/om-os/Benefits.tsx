import { Shield, Clock, Car, Award } from "lucide-react";

const items = [
  { icon: Shield, title: "Høj beståelsesrate", text: "95% af vores elever består første gang." },
  { icon: Clock, title: "Fleksible tider", text: "Køretimer tilpasset din hverdag." },
  { icon: Car, title: "Moderne biler", text: "Lær at køre i nye og sikre biler." },
  { icon: Award, title: "40 års erfaring", text: "En af de mest erfarne skoler i området." },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Derfor vælger elever os
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-xl border bg-background">
              <item.icon className="w-8 h-8 mb-4 text-yellow-500" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};