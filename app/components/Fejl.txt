"use client"
import { useState } from "react";

const Fejl = () => {
  const [openIndex, setOpenIndex] = useState(null);

const commonMistakes = [
  {
    mistake: "Manglende spejlcheck før vigepligt og vognbaneskift",
    category: "Observation & kommunikation",
    severity: "critical", // critical | high | medium
    problem: "En af de absolut hyppigste årsager til at dumpe køreprøven er manglende eller utilstrækkelig spejlcheck. Mange elever glemmer at tjekke det døde vinkel før de drejer til højre, skifter vognbane eller foretager andre manøvrer. Dette er særligt problematisk i rundkørsler, ved motorvejspåkørsler og i tæt bykørsel, hvor cyklister og motorcykler nemt overses.",
    why: "Under nervøsitet ved prøven fokuserer mange kun på det, der er foran dem, mens censor kigger specifikt efter om du scanner hele trafikbilledet. Derudover har mange elever ikke automatiseret spejlcheck-rutinen tilstrækkeligt i deres træning, så det glemmes når stress-niveauet stiger.",
    solution: "Lav altid den faste rutine: indvendigt bakspejl → højre/venstre sidespejl → fysisk blik over skulderen (især til højre). Gør dette SYNLIGT for censor ved at bevæge hovedet tydeligt. Øv dig i at sige rutinen højt under dine træningslektioner: 'Jeg skal skifte vognbane, så jeg tjekker spejl... spejl... skulder... blinklys... og skifter'. Ved prøven kan du sige det i dit stille sind.",
    practicalTip: "En erfaren instruktør anbefaler: 'Overdrev spejlchecket de første 10 lektioner. Drej hele hovedet, så det næsten føles fjollet. Det bliver automatik efter et par uger, og så ved prøven er det naturligt.'",
    statistic: "43% af dumpede prøver i Vejle-området i 2025 skyldes manglende observation/spejlcheck.",
    image: "/images/mistakes/spejlcheck.jpg"
  },
  {
    mistake: "For høj hastighed ved indkørsel i rundkørsler",
    category: "Hastighedskontrol",
    severity: "high",
    problem: "Mange elever kører for hurtigt ind i rundkørsler – typisk 50-60 km/t i stedet for de anbefalede 30-40 km/t. Dette giver for kort reaktionstid til at scanne for trafik inde i rundkørslen, opdage fodgængere på zebraovergange, og mister muligheden for at stoppe sikkert hvis der pludselig dukker en bil op. I Vejles større rundkørsler (fx ved Damhaven og Vejle Stadion) er dette en særlig hyppig fejl.",
    why: "Elever oplever ofte at andre bilister kører hurtigt gennem rundkørsler, så de efterligner denne adfærd uden at forstå at ved køreprøven vurderes du på SIKKER kørsel, ikke effektiv kørsel. Desuden undervurderer mange hvor svært det er at scanne hele rundkørslen når man kører 60 km/t – øjet når ikke at registrere alle trafikanter.",
    solution: "Når du nærmer dig en rundkørsel, sænk allerede 50 meter før til 40 km/t, og lige ved indkørsel til 30 km/t. Scan først venstre for trafik inde i rundkørslen, derefter højre for eventuelle cyklister/fodgængere. Først når du har et komplet overblik, accelerer forsigtigt ind. Husk: censor bedømmer ikke at du er hurtig, men at du er SIKKER.",
    practicalTip: "Vores instruktører bruger '3-punkts scanning': 1) Langt ude til venstre (kørende trafik), 2) Nær til højre (cyklister), 3) Zebraovergang før indkørsel. Først når alle 3 er clear, kør ind.",
    statistic: "I Vejle-området er rundkørslen ved Damhaven den mest udfordrende – 28% af fejlene på lokalruter sker her.",
    image: "/images/mistakes/rundkorsel.jpg"
  },
  {
    mistake: "Nervøsitet og tekniske fejl ved parallelparkering",
    category: "Manøvrer",
    severity: "high",
    problem: "Parallelparkering er den manøvre der skaber mest angst hos elever, og det resulterer ofte i kaotisk udførelse: køre for tæt på andre biler, glemme sekvensen af trin, bakke for hurtigt, eller give op halvvejs. Selv elever der har øvet det 50 gange kan fryse under prøven fordi de fokuserer på 'at gøre det perfekt' i stedet for 'at gøre det sikkert'.",
    why: "Parallelparkering kræver rumlig forståelse, koordination og ro – tre ting der forsvinder når man er nervøs. Desuden tror mange at censor forventer en perfekt parkering i første forsøg. Sandheden er: censor accepterer gerne 2-3 korrektioner, så længe du holder styr på trafikken omkring dig og viser kontrol over bilen.",
    solution: "Træn sekvensen indtil den sidder i muskelhukommelsen: 1) Kør lige forbi den ledige plads, 2) Stop på linje med forankørende, 3) Læg i bakgear, tjek spejle OG skulder, 4) Drej rattet til højre og bak langsomt, 5) Når din bil er 45°, ret rattet ud, 6) Når bagenden er inde, drej rattet til venstre og juster. Sig trinene højt under træning. Ved prøven: tag din tid, brug gerne 60 sekunder, og korriger roligt hvis nødvendigt.",
    practicalTip: "En trick fra instruktører: 'Forestil dig at der sidder en kop kaffe på dashboardet. Hvis den vælter, bremser du for hårdt. Hold samme ro under parkering.'",
    statistic: "67% af elever rapporterer at parallelparkering er deres største bekymring – men kun 18% dumper rent faktisk på det, da censor er langt mere tolerant end eleverne tror.",
    image: "/images/mistakes/parkering.jpg"
  },
  {
    mistake: "Glemmer blinklys ved vognbaneskift og afkørsel",
    category: "Kommunikation",
    severity: "critical",
    problem: "At glemme blinklys er en 'automatik-fejl' som mange oplever: du har gjort det tusind gange i træning, men under prøvens stress glemmer du det ved en enkelt afkørsel eller vognbaneskift. Særligt på motorvejen ved frakørsel eller når man drejer højre i et T-kryds er dette kritisk, da andre trafikanter ikke kan forudsige dine intentioner.",
    why: "Blinklys er så automatisk at det paradoksalt nok glemmes når hjernen er overbelastet. Under prøven tænker du samtidig på: 'Hvor skal jeg køre? Hvad siger censor? Er der nogen bag mig? Hvad er hastigheden?' – og så ryger det lille tryk på blinklysarmen ud af hovedet. Det sker især hvis censor beder dig om en pludselig manøvre.",
    solution: "Lav en mental 'før-manøvre-tjekliste' som du ALTID kører igennem: 'Jeg vil [handling] → blinklys → spejl → skulder → udfør'. Sig det i dit stille sind hver gang. Desuden: træn i at reagere på pludselige instruktioner fra din kørelærer. Bed dem om at sige 'Tag næste til højre' kun 100 meter før, så du lærer at håndtere stress og huske blinklys.",
    practicalTip: "Brug den fysiske følelse: når du løfter hånden fra rattet mod blinklysarmen, mærk klikket under fingeren. Gør det til en sanseoplevelse, ikke bare en handling. Det hjælper hukommelsen.",
    statistic: "Manglende blinklys udgør 31% af 'kommunikationsfejl' på prøver i Region Syddanmark.",
    image: "/images/mistakes/blinklys.jpg"
  },
  {
    mistake: "Holder for kort afstand til forankørende",
    category: "Sikkerhedsafstand",
    severity: "medium",
    problem: "Mange elever holder kun 1 sekunds afstand til bilen foran (eller mindre), især i bykørsel hvor trafikken er tæt. Dette giver utilstrækkelig bremselængde hvis forankørende bremser brat, og signalerer til censor at du ikke forstår sikkerhedsprincipper. På motorvejen er problemet endnu værre, da højere hastighed kræver længere reaktionstid.",
    why: "I daglig trafik ser man konstant bilister der kører tæt – så elever tror det er normalt. Desuden føles 2 sekunders afstand 'forkert' når man er ny, fordi det ser ud som om der er langt til bilen foran. Men det er præcis denne afstand der redder liv i nødsituationer.",
    solution: "Brug '2-sekunders reglen' konsekvent: Vælg et fast punkt (lygtepæl, skilt, træ) som forankørende passerer. Tæl derefter '21-22' – hvis du passerer punktet før du når at sige det, er du for tæt på. På motorvejen: brug '3-sekunders reglen'. Ved regn/sne: fordobl afstanden. Øv dette på HVER lektion indtil det bliver automatik.",
    practicalTip: "Instruktører anbefaler: 'På de første 5 lektioner, sig tallet højt hver gang: 21-22, 21-22. Det irriterer dig måske, men efter 2 uger behøver du ikke tælle mere – dit indre ur har lært det.'",
    statistic: "For kort afstand er involveret i 23% af alle trafikulykker i Danmark, men kun 12% af elever dumper direkte på det – fordi censor ofte giver en advarsel først.",
    image: "/images/mistakes/afstand.jpg"
  },
  {
    mistake: "Misfortolkning af vigepligtsregler ved T-kryds",
    category: "Vigepligt & regler",
    severity: "high",
    problem: "Forvirring om vigepligtsregler er især problematisk ved T-kryds, hvor mange elever ikke ved om de skal vige for trafik fra højre, eller om de har fri passage. Det samme gælder ved blinkende gult lys (hvor vigepligtstavler gælder) og ved udkørsel fra parkeringspladser. Denne usikkerhed får nogle til at køre ud uden at stoppe, mens andre stopper selv når de har fri passage – begge dele kan være fejl.",
    why: "Vigepligtsreglerne er komplekse og ikke intuitive før man har erfaring. Mange elever lærer reglerne teoretisk, men når de står i situationen i praksis, går hjernen i panik: 'Har jeg vigepligt eller ej?'. Især ved atypiske kryds i Vejle (fx ved Willy Sørensens Plads) kan selv erfarne bilister blive usikre.",
    solution: "Lær hovedprincippet: 'Ubetinget vigepligt' (trekant-skiltet) betyder du ALTID skal stoppe og vurdere – selv om vejen ser tom ud. 'Vigepligt' (gul diamant med rød kant) betyder du skal sænke farten og være klar til at stoppe. Hvis der INGEN skilte er: standard vigepligt til højre. Ved usikkerhed: det er ALDRIG forkert at stoppe og vurdere i 2 sekunder – censor sætter pris på forsigtighed.",
    practicalTip: "Når du nærmer dig et kryds, stil dig selv spørgsmålet højt: 'Har jeg vigepligt her?' Så scanner du bevidst efter skilte. Gør dette på hver lektion ved ALLE kryds – efter 10 lektioner sidder det.",
    statistic: "Vejle har 6 'berømte' krydskomplekse krydser hvor flest dumper – vi gennemgår alle 6 under din undervisning.",
    image: "/images/mistakes/vigepligt.jpg"
  }
];

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "rgba(var(--color-yellow-rgb), 0.03)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            De mest almindelige fejl ved køreprøven
          </h2>

          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Klik på en fejl for at se hvordan du undgår den.
          </p>
        </div>

        <div className="space-y-4">
          {commonMistakes.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full text-left p-6 flex justify-between items-start gap-6"
                >
                  <div>
                    <h3
                      className="font-display text-xl font-bold mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.mistake}
                    </h3>

                    {/* preview */}
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.problem.slice(0, 140)}...
                    </p>
                  </div>

                  <span className="text-3xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="px-6 pb-6 space-y-5 animate-fadeIn">
                    <div>
                      <h4 className="font-bold mb-1">
                        Hvorfor sker det?
                      </h4>
                      <p className="text-sm">{item.why}</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-1">
                        Sådan undgår du fejlen
                      </h4>
                      <p className="text-sm">{item.solution}</p>
                    </div>

                    <div className="text-sm italic">
                      💡 {item.practicalTip}
                    </div>

                    <div className="text-xs opacity-70">
                      📊 {item.statistic}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fejl;