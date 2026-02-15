const Priser = () => {
  return (
    <>
<section className="py-20 max-w-6xl m-auto">
  <div className="container mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span
        className="font-semibold text-sm uppercase tracking-wider"
        style={{ color: "var(--color-yellow)" }}
      >
        Priser
      </span>
      <h2
        className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4"
        style={{ color: "var(--color-text)" }}
      >
        Hvad koster kørekort B i Vejle?
      </h2>
      <p
        className="normal-text"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Gennemsigtige priser uden skjulte gebyrer. Mulighed for fleksibel
        afbetaling.
      </p>
    </div>

    {/* Lovpakke - Hovedkort */}
    <div
      className="max-w-3xl mx-auto rounded-3xl border-2 p-8 md:p-10 mb-8"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        borderColor: "var(--color-yellow)",
        boxShadow: "0 8px 32px rgba(250, 204, 21, 0.1)",
      }}
    >
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Lovpligtig pakke
          </h3>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Alt du skal bruge for at tage kørekort
          </p>
        </div>
        <div className="text-right">
          <div
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-yellow)" }}
          >
            14.500
          </div>
          <div
            className="text-sm mt-1"
            style={{ color: "var(--color-text-secondary)" }}
          >
            DKK
          </div>
        </div>
      </div>

      {/* Inkluderet i pakken */}
      <div className="space-y-4 mb-8">
        {[
          {
            title: "Ubegrænset teoriundervisning",
            subtitle: "Gældende i et år (lovbefalet 29 timer)",
            price: "4.200 kr.",
          },
          {
            title: "16 køretimer på vej",
            subtitle: "Erfarne instruktører i moderne biler",
            price: "10.400 kr.",
          },
          {
            title: "Manøvrebane",
            subtitle: "4 lektioner á 45 minutter",
            price: "1.200 kr.",
          },
          {
            title: "Glatbane",
            subtitle: "4 lektioner á 45 minutter",
            price: "1.800 kr.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 rounded-xl"
            style={{
              backgroundColor: "var(--color-bg)",
            }}
          >
            <div className="flex-1">
              <div
                className="font-semibold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {item.title}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.subtitle}
              </div>
            </div>
            <div
              className="text-right ml-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <div className="line-through text-sm">{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Prisberegning */}
      <div
        className="border-t-2 pt-6 space-y-3"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="flex justify-between text-sm">
          <span style={{ color: "var(--color-text-secondary)" }}>
            I alt uden rabat
          </span>
          <span
            className="font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            17.600 kr.
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span style={{ color: "var(--color-yellow)" }}>Pakkerabat*</span>
          <span
            className="font-semibold"
            style={{ color: "var(--color-yellow)" }}
          >
            -3.100 kr.
          </span>
        </div>
        <div
          className="flex justify-between pt-3 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span
            className="text-lg font-bold"
            style={{ color: "var(--color-text)" }}
          >
            Lovpakke i alt
          </span>
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--color-yellow)" }}
          >
            14.500 kr.
          </span>
        </div>
      </div>

      {/* Tilføj køreprøve */}
      <div
        className="mt-6 p-4 rounded-xl flex justify-between items-center"
        style={{
          backgroundColor: "var(--color-bg)",
        }}
      >
        <span
          className="font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          Køreprøve (obligatorisk)
        </span>
        <span
          className="font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          + 650 kr.
        </span>
      </div>

      {/* Total hos køreskole */}
      <div
        className="mt-4 p-6 rounded-xl"
        style={{
          backgroundColor: "rgba(250, 204, 21, 0.1)",
        }}
      >
        <div className="flex justify-between items-center">
          <div>
            <div
              className="text-sm mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              I alt hos Lønbæks Køreskole
            </div>
            <div
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              15.150 kr.
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Betaling & Andre omkostninger - Side ved side */}
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
      {/* Betalingsplan */}
      <div
        className="rounded-2xl border-2 p-6"
        style={{
          backgroundColor: "var(--color-bg-elevated)",
          borderColor: "var(--color-border)",
        }}
      >
        <h3
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Fleksibel betaling
        </h3>
        <div className="space-y-3">
          {[
            { label: "Ved tilmelding", amount: "500 kr." },
            { label: "1. rate (inden holdstart)", amount: "7.000 kr." },
            {
              label: "2. rate (efter ca. 1 måned)",
              amount: "7.650 kr.",
            },
          ].map((payment, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {payment.label}
              </span>
              <span
                className="font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {payment.amount}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-xs mt-4 pt-4 border-t"
          style={{
            color: "var(--color-text-secondary)",
            borderColor: "var(--color-border)",
          }}
        >
          Alt betaling via netbank. Vi modtager ikke kontanter.
        </p>
      </div>

      {/* Andre omkostninger */}
      <div
        className="rounded-2xl border-2 p-6"
        style={{
          backgroundColor: "var(--color-bg-elevated)",
          borderColor: "var(--color-border)",
        }}
      >
        <h3
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Andre omkostninger
        </h3>
        <div className="space-y-3">
          {[
            {
              label: "Stempelmærke",
              sublabel: "Betales til myndighederne",
              amount: "1.600 kr.",
            },
            {
              label: "Førstehjælpskursus",
              sublabel: "Betales til Røde Kors",
              amount: "650 kr.",
            },
            {
              label: "Lægeerklæring",
              sublabel: "Betales til egen læge",
              amount: "Varierer",
            },
          ].map((cost, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start">
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    {cost.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {cost.sublabel}
                  </div>
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {cost.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Total pris */}
    <div
      className="max-w-3xl mx-auto rounded-2xl border-2 p-8 text-center"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        borderColor: "var(--color-border)",
      }}
    >
      <p
        className="text-sm mb-2"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Forventet totalpris for kørekort inkl. alt
      </p>
      <div
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ color: "var(--color-text)" }}
      >
        ca. 17.400 kr.
      </div>
      <p
        className="text-xs"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Uden lægeerklæring (pris varierer)
      </p>
    </div>

    {/* Info bokse */}
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
      {/* Ekstra lektioner */}
      <div
        className="rounded-xl p-6"
        style={{
          backgroundColor: "rgba(250, 204, 21, 0.08)",
          borderLeft: "4px solid var(--color-yellow)",
        }}
      >
        <h4
          className="font-bold mb-2"
          style={{ color: "var(--color-text)" }}
        >
          Ekstra kørelektioner
        </h4>
        <p
          className="text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Har du brug for flere timer? <strong>395 kr. pr. lektion</strong>
        </p>
      </div>

      {/* Pakkerabat info */}
      <div
        className="rounded-xl p-6"
        style={{
          backgroundColor: "var(--color-bg-elevated)",
          border: "2px solid var(--color-border)",
        }}
      >
        <h4
          className="font-bold mb-2 flex items-center gap-2"
          style={{ color: "var(--color-text)" }}
        >
          *Pakkerabat
        </h4>
        <p
          className="text-xs"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Stopper du før tid, udløses rabatten forholdsmæssigt baseret på antal
          modtagne lektioner.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <a
        href="#booking"
        className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold text-lg transition hover:-translate-y-1 hover:shadow-xl"
        style={{
          backgroundColor: "var(--color-yellow)",
          color: "var(--color-bg)",
        }}
      >
        Tilmeld dig nu
      </a>
      <p
        className="text-sm mt-4"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Eller kontakt os for spørgsmål om priser
      </p>
    </div>
  </div>
</section>
</>
)
    }


    export default Priser;