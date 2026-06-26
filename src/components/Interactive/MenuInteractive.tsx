import React from 'react';

interface MenuItem {
  name_en: string;
  name_es: string;
  price_usd: number;
  price_mxn: number;
  details?: string;
}

interface MenuSection {
  title_en: string;
  title_es: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title_en: "Appetizers",
    title_es: "Entradas",
    items: [
      { name_en: "GUACAMOLE", name_es: "Guacamole", price_usd: 7, price_mxn: 126 },
      { name_en: "POTATO WEDGES", name_es: "Papas Gajo", price_usd: 11, price_mxn: 198 },
      { name_en: "MOZZARELLA STICKS", name_es: "Dedos de Queso", price_usd: 14, price_mxn: 252 },
      { name_en: "SHRIMP NACHOS", name_es: "Nachos de Camarón", price_usd: 22, price_mxn: 396 },
      { name_en: "SWEET POTATO FRIES", name_es: "Camote Frito", price_usd: 11, price_mxn: 198 }
    ]
  },
  {
    title_en: "Specialities",
    title_es: "Especialidades",
    items: [
      { name_en: "CARIBBEAN CEVICHE", name_es: "Ceviche caribeño", price_usd: 15, price_mxn: 270 },
      { name_en: "RED SHRIMP AGUACHILE", name_es: "Aguachile rojo de camarón", price_usd: 18, price_mxn: 324 },
      { name_en: "RED FISH AGUACHILE", name_es: "Aguachile rojo de pescado", price_usd: 14, price_mxn: 252 },
      { name_en: "GREEN SHRIMP AGUACHILE", name_es: "Aguachile verde de camarón", price_usd: 18, price_mxn: 324 },
      { name_en: "GREEN FISH AGUACHILE", name_es: "Aguachile verde de pescado", price_usd: 14, price_mxn: 252 },
      { name_en: "FISH AGUACHILE", name_es: "Aguachile de pescado", price_usd: 16, price_mxn: 288 }
    ]
  },
  {
    title_en: "Seafood Specialities",
    title_es: "Antojitos Marinos",
    items: [
      { name_en: "SHRIMP TACOS", name_es: "Tacos de Camarón", price_usd: 20, price_mxn: 360, details: "3pzs" },
      { name_en: "GOBERNADOR TACOS", name_es: "Tacos Gobernador", price_usd: 21, price_mxn: 378, details: "3pzs" },
      { name_en: "SHRIMP EMPANADA", name_es: "Empanada de camarón", price_usd: 8, price_mxn: 144, details: "3pzs" },
      { name_en: "FISH EMPANADA", name_es: "Empanada de pescado", price_usd: 8, price_mxn: 144, details: "3pzs" },
      { name_en: "CRAB EMPANADA", name_es: "Empanada de Jaiba", price_usd: 8, price_mxn: 144, details: "3pzs" }
    ]
  },
  {
    title_en: "Seafood cocktails",
    title_es: "Cócteles",
    items: [
      { name_en: "SHRIMP COCKTAIL", name_es: "Cóctel de camarón", price_usd: 19, price_mxn: 342 },
      { name_en: "OCTOPUS COCKTAIL", name_es: "Cóctel de pulpo", price_usd: 19, price_mxn: 342 }
    ]
  },
  {
    title_en: "Skewers",
    title_es: "Brochetas",
    items: [
      { name_en: "SHRIMP SKEWER", name_es: "Brocheta de camarón", price_usd: 12, price_mxn: 216 },
      { name_en: "OCTOPUS SKEWER", name_es: "Brocheta de pulpo", price_usd: 12, price_mxn: 216 }
    ]
  }
];

export default function MenuInteractive() {
  const topSections = menuSections.slice(0, 3);
  const bottomSections = menuSections.slice(3, 5);

  return (
    /* Contenedor principal con el color de fondo exacto tipo pergamino/arena (#e6e4d3) */
    <div className="w-full min-h-screen bg-[#e6e4d3] relative overflow-hidden py-16 px-4 md:px-8 selection:bg-[#326260]/20 text-[#4a3621]">
      
      {/* 
        ILUSTRACIONES DE FONDO (Watermarks)
        Para que se vea idéntico, exporta los vectores (pulpo, camarón, limón) desde Figma como PNGs limpios 
        o SVGs en un solo tono (#326260 con opacidad baja) y colócalos de forma absoluta.
      */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/images/shrimp-draw.png')] bg-contain bg-no-repeat opacity-15 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[url('/images/octopus-draw.png')] bg-contain bg-no-repeat opacity-15 pointer-events-none hidden md:block" />
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-[url('/images/lemon-draw.png')] bg-contain bg-no-repeat opacity-10 pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* LOGOTIPO / ENCABEZADO DE LA MARCA (Estilo Retro) */}
        <header className="text-center md:text-left mb-16 border-b-2 border-[#326260]/20 pb-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-xs tracking-[0.2em] uppercase text-[#4a3621]/60 font-mono mt-4 md:mt-0 font-bold">
            Beach Club Menu • Puerto Morelos
          </p>
        </header>

        {/* PARTE SUPERIOR: GRID DE 3 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {topSections.map((section, sIdx) => (
            <div 
              key={sIdx} 
              className={`space-y-8 ${
                sIdx < 2 ? 'md:border-r-2 md:border-[#326260]/15 md:pr-12' : ''
              }`}
            >
              {/* Títulos de Categoría */}
              <div className="space-y-0.5">
                <h3 className="font-serif text-[22px] font-bold uppercase tracking-wide text-[#4a3621]">
                  {section.title_en}
                </h3>
                <h4 className="font-serif text-lg italic text-[#6a5641] font-medium leading-none">
                  {section.title_es}
                </h4>
              </div>

              {/* Platillos */}
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start">
                    <div className="space-y-0.5 max-w-[65%]">
                      <h5 className="font-sans font-black tracking-wide text-sm text-[#241a0f]">
                        {item.name_en}
                      </h5>
                      <p className="font-serif text-xs text-[#6a5641] italic font-medium">
                        {item.name_es}
                      </p>
                      {item.details && (
                        <span className="inline-block bg-[#326260]/10 text-[#326260] font-mono font-bold text-[10px] px-1.5 py-0.5 rounded-sm mt-1">
                          {item.details}
                        </span>
                      )}
                    </div>
                    
                    {/* Precios con tipografía azul/verde y terracota exactos */}
                    <div className="text-right font-mono whitespace-nowrap min-w-[80px]">
                      <div className="text-[#326260] font-black text-[14px]">
                        ${item.price_usd}<span className="text-[9px] font-bold align-super ml-0.5">USD</span>
                      </div>
                      <div className="text-[#c45a45] font-black text-[12px] mt-0.5">
                        ${item.price_mxn}<span className="text-[8px] font-bold align-super ml-0.5">MXN</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PARTE INFERIOR: RECUADRO CON BORDE DISCONTINUO (Cócteles y Brochetas) */}
        <div className="mt-20 border-2 border-dashed border-[#326260]/30 rounded-xl p-8 md:p-12 bg-[#dfdbca]/40 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {bottomSections.map((section, sIdx) => (
              <div 
                key={sIdx} 
                className={`space-y-8 ${
                  sIdx === 0 ? 'md:border-r-2 md:border-[#326260]/15 md:pr-16' : ''
                }`}
              >
                {/* Títulos invertidos como la imagen (ES arriba, EN abajo) */}
                <div className="space-y-0.5">
                  <h3 className="font-serif text-[22px] font-bold uppercase tracking-wide text-[#4a3621]">
                    {section.title_es}
                  </h3>
                  <h4 className="font-sans text-xs tracking-widest uppercase font-black text-[#326260]/70">
                    {section.title_en}
                  </h4>
                </div>

                {/* Platillos */}
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-start">
                      <div className="space-y-0.5 max-w-[65%]">
                        <h5 className="font-sans font-black tracking-wide text-sm text-[#241a0f]">
                          {item.name_en}
                        </h5>
                        <p className="font-serif text-xs text-[#6a5641] italic font-medium">
                          {item.name_es}
                        </p>
                      </div>
                      
                      {/* Precios */}
                      <div className="text-right font-mono whitespace-nowrap min-w-[80px]">
                        <div className="text-[#326260] font-black text-[14px]">
                          ${item.price_usd}<span className="text-[9px] font-bold align-super ml-0.5">USD</span>
                        </div>
                        <div className="text-[#c45a45] font-black text-[12px] mt-0.5">
                          ${item.price_mxn}<span className="text-[8px] font-bold align-super ml-0.5">MXN</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}