import { Button } from "antd";

export const CTA = () => {
  return (
    <section className="py-24 bg-yellow-500 text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Klar til at tage dit kørekort?
        </h2>

        <p className="text-black/80 text-lg">
          Tilmeld dig i dag og kom hurtigt i gang.
        </p>

        <Button
          size="large"
          className="h-[52px] px-10 rounded-lg font-semibold"
        >
          Tilmeld hold
        </Button>
      </div>
    </section>
  );
};