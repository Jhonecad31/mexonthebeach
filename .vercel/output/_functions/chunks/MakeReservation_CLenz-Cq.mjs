import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate, V as maybeRenderHead, W as addAttribute } from './entrypoint_yAU3LSnf.mjs';
import { g as getI18N, $ as $$BaseLayout, r as renderScript } from './BaseLayout_DlliggZc.mjs';

const $$MakeReservation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MakeReservation;
  const { currentLocale } = Astro2;
  const lang = currentLocale || "en";
  const i18n = getI18N({ currentLocale });
  const bookingUrl = lang === "en" ? "/#booking" : `/${lang}#booking`;
  [
    {
      title: i18n.MAKE_YOU_RESERVATION?.MENU?.STARTERS || "Entradas & Snacking",
      items: [
        {
          name: "Ceviche Mex on the Beach",
          price: "$320 MXN",
          desc: "Pesca del día marinada en cítricos locales, aguacate, habanero sutil y totopos artesanales."
        },
        {
          name: "Tacos de Camarón Ensenada",
          price: "$280 MXN",
          desc: "Tres tacos en tortilla de maíz azul, camarón capeado, col morada y aderezo de chipotle."
        }
      ]
    },
    {
      title: i18n.MAKE_YOU_RESERVATION?.MENU?.MAINS || "Platos Fuertes",
      items: [
        {
          name: "Pescado Tikin Xic",
          price: "$450 MXN",
          desc: "Clásico caribeño marinado en achiote, cocinado a las brasas y servido con arroz con coco."
        },
        {
          name: "Hamburguesa Premium Beach",
          price: "$340 MXN",
          desc: "Corte selecto de res, queso cheddar fundido, tocino crujiente y papas trufadas."
        }
      ]
    },
    {
      title: i18n.MAKE_YOU_RESERVATION?.MENU?.DRINKS || "Coctelería de Autor",
      items: [
        {
          name: "Mex Mojito",
          price: "$190 MXN",
          desc: "Ron blanco, hierbabuena fresca, azúcar de caña, infusión de maracuyá y un toque de agua mineral."
        },
        {
          name: "Caribe Fling",
          price: "$210 MXN",
          desc: "Mezcal artesanal espadín, jugo de piña tatemada, jarabe de agave y escarcha de sal de gusano."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative">  <section class="relative h-[80vh] md:h-[90vh] w-full bg-[#FAF6EE] overflow-hidden flex items-center">  <div class="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none"> <img src="/img-beach-club/mex-beach-club-lifestyle.webp" alt="Puerto Morelos Aerial View" class="w-full h-full object-cover scale-105">  <div class="absolute inset-0 bg-black/15 z-10"></div>  <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10"></div>  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 md:hidden"></div>  <div class="absolute inset-x-0 bottom-0 h-1/4 z-20"${addAttribute({
    background: "linear-gradient(to top, rgba(254, 251, 247, 1) 0%, rgba(254, 251, 247, 0) 100%)"
  }, "style")}></div> </div>  <div class="relative z-30 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-start text-left mt-8 md:mt-0"> <div class="max-w-2xl space-y-5 md:space-y-6 animate-fade-in"> <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"> ${i18n.MAKE_YOU_RESERVATION.HERO.title} </h1> <p class="text-white/90 font-normal text-sm md:text-lg leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] max-w-xl"> ${i18n.MAKE_YOU_RESERVATION.HERO.description} </p> <div class="pt-3"> <a${addAttribute(bookingUrl, "href")} class="inline-block bg-primary hover:bg-primary-hover text-white py-4 px-10 rounded-full font-bold text-xs tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"> ${i18n.PUERTO_MORELOS.HERO.cta || "Explorar Experiencias"} </a> </div> </div> </div> </section> <section class="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 mt-12 md:mt-20"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start"> <div class="lg:col-span-2 space-y-8 md:space-y-12"></div>  <div class="lg:col-span-1 lg:sticky lg:top-24"> <form id="beach-club-booking-form" class="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-stone-100 space-y-4 md:space-y-5">  <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Select Date</label> <input type="date" name="date" required class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors"> </div>  <div class="grid grid-cols-2 gap-4"> <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Adults</label> <select name="adults" required class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors appearance-none"> <option value="1">1 Adult</option> <option value="2" selected>2 Adults</option> <option value="3">3 Adults</option> <option value="4">4 Adults</option> <option value="5">5 Adults</option> </select> </div> <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Children</label> <select name="children" class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors appearance-none"> <option value="0" selected>0 Children</option> <option value="1">1 Child</option> <option value="2">2 Children</option> <option value="3">3 Children</option> </select> </div> </div>  <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Full name</label> <input type="text" name="fullName" placeholder="Enter your full name" required class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors"> </div>  <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Phone</label> <input type="tel" name="phone" placeholder="Enter your phone number" required class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors"> </div>  <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Email</label> <input type="email" name="email" placeholder="Enter your email" required class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors"> </div>  <div class="space-y-1.5"> <label class="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-stone-700">Message</label> <textarea name="message" rows="3" placeholder="Any special requests?..." class="w-full bg-[#FAF6EE] text-stone-700 text-xs md:text-sm rounded-xl px-3 py-2.5 md:px-4 md:py-3 border border-stone-200/60 focus:outline-none focus:border-[#4e8782] focus:ring-1 focus:ring-[#4e8782] transition-colors resize-none"></textarea> </div>  <button type="submit" id="submit-booking-btn" class="w-full bg-[#E77543] hover:bg-[#d66332] text-white text-xs md:text-sm font-bold tracking-wider uppercase py-3.5 rounded-xl transition-all shadow-md shadow-orange-700/10 active:scale-[0.99] mt-2">
Request Reservation
</button> </form> </div> ${renderScript($$result2, "C:/mexonthebeach/src/components/MakeReservation.astro?astro&type=script&index=0&lang.ts")} </div> </section> <div class="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"> <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"> <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1350,40 1440,30 L1440,40 L0,40 Z" fill="#ffffff"></path> <path d="M0,15 C360,35 720,-5 1080,15 C1260,25 1350,35 1440,25" stroke="var(--color-secondary)" stroke-width="2" fill="none"></path> </svg> </div> </div> ` })}`;
}, "C:/mexonthebeach/src/components/MakeReservation.astro", void 0);

export { $$MakeReservation as $ };
