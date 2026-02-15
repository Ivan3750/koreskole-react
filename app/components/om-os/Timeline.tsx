export const Timeline = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Vores historie
        </h2>

        <div className="space-y-8 border-l pl-8">
          
          <TimelineItem year="1984" text="Lønbæks Køreskole blev grundlagt." />
          <TimelineItem year="2005" text="Udvidelse til flere byer." />
          <TimelineItem year="2024" text="Over 3000 elever uddannet." />

        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, text }: any) => (
  <div className="relative">
    <div className="absolute -left-[42px] top-1 w-4 h-4 bg-yellow-500 rounded-full" />
    <h3 className="font-semibold text-lg">{year}</h3>
    <p className="text-muted-foreground">{text}</p>
  </div>
);