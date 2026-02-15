"use client";

import React from "react";

const Timeline = () => {
  const steps = [
    {
      number: "01",
      title: "Intromøde og tilmelding",
      description: "Du starter med et uforpligtende intromøde, hvor du hører om forløbet og undervisningen. Efter tilmelding vælger du kørelærer og får udleveret lektionsplan.",
    },
    {
      number: "02",
      title: "Teoriundervisning",
      description: "Teorien foregår én gang om ugen i vores lokaler i Vejle. Du har ubegrænset teori, så vi sikrer, at du føler dig tryg og godt forberedt.",
    },
    {
      number: "03",
      title: "Førstehjælp & lægeerklæring",
      description: "Inden teoriprøven skal du gennemføre 8 timers færdselsrelateret førstehjælp samt have en lægeerklæring.",
    },
    {
      number: "04",
      title: "Manøvregård – første kørsel",
      description: "Du får 4 lektioner på manøvregård, hvor du lærer grundlæggende betjening af bilen i trygge omgivelser.",
    },
    {
      number: "05",
      title: "Køretimer på vej",
      description: "Herefter kører du i trafikken sammen med din kørelærer. Teori og kørsel følger hinanden, så du bruger det lærte i praksis.",
    },
    {
      number: "06",
      title: "Køreteknisk anlæg",
      description: "Du får 4 lektioner på køreteknisk anlæg, hvor du træner bremsning, risiko og bilkontrol i forskellige situationer.",
    },
    {
      number: "07",
      title: "Teoriprøve & Sidste køretime",
      description: "Du øver via online teoriprøver og går derefter til teoriprøve hos politiet i Vejle. Til sidst gennemgår vi det sidste træningsforløb, så du er helt klar til køreprøven.",
    },
    {
      number: "08",
      title: "Praktisk køreprøve",
      description: "Du kører med en sagkyndig, som vurderer dine færdigheder i trafikken. Når du består — får du dit kørekort.",
    }
  ];

  return (
    <section
      className="py-20 md:py-28 lg:py-40"
      style={{ backgroundColor: "var(--color-bg-layout)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Din vej til kørekortet
          </h2>
          
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Fra første intromøde til kørekort i hånden – følg med i de 8 trin, 
            der gør dig til en sikker og selvsikker bilist.
          </p>
        </div>

        {/* Steps Grid - 2 rows x 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-2 p-6"
              style={{ 
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)"
              }}
            >
              {/* Number badge */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center
                font-display font-bold text-xl mb-4"
                style={{ 
                  backgroundColor: "var(--color-yellow)",
                  color: "white"
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <h3
                className="font-semibold text-lg mb-3 leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;