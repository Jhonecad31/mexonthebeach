import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate, V as maybeRenderHead, W as addAttribute } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$BaseLayout } from './BaseLayout_DlliggZc.mjs';

const $$MFood = createComponent(($$result, $$props, $$slots) => {
  const menuImages = [
    "/menu-folder/menu-food1.webp",
    "/menu-folder/menu-foodp2.webp",
    "/menu-folder/menu-foodp3.webp",
    "/menu-folder/menu-foodp4.webp"
  ];
  const labels = {
    heroTag: "The Cocktail Club",
    heroTitle: "Our Menus",
    breadcrumb: "The Mex-Caribbean Palate / Menus",
    sectionTitle: "Explore our menus",
    sectionDesc: "Rooted in the Puerto Morelos waterfront setting, Mex On The Beach places mixology and gastronomy at its core, with creations crafted live using premium spirits, fresh local ingredients, and refined techniques."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Menu - Mex On The Beach" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#fcfbf7] min-h-screen text-[#1a1a1a]">  <section class="relative h-[40vh] flex flex-col justify-center items-center text-white bg-cover bg-center" style="background-image: url('/img-beach-club/mex-beach-drinks.webp');"> <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div> <div class="relative z-10 text-center"> <span class="text-xs tracking-[0.2em] uppercase opacity-90 block mb-2">${labels.heroTag}</span> <h1 class="text-4xl md:text-5xl font-serif tracking-wide uppercase">${labels.heroTitle}</h1> </div> </section>  <div class="bg-[#f3ede4] py-3 text-center text-[10px] tracking-[0.15em] uppercase text-gray-600 border-b border-gray-200"> ${labels.breadcrumb} </div>  <section class="max-w-3xl mx-auto text-center px-6 py-16"> <h2 class="text-2xl md:text-3xl font-serif mb-4 text-[#2c4e4b]">${labels.sectionTitle}</h2> <p class="text-xs md:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto font-light"> ${labels.sectionDesc} </p> </section>  <main class="max-w-6xl mx-auto px-4 pb-24"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"> ${menuImages.map((src, index) => renderTemplate`<div class="bg-white shadow-md hover:shadow-xl border border-black/5 overflow-hidden rounded-sm transition-shadow duration-300"> <img${addAttribute(src, "src")}${addAttribute(`Menu page ${index + 1}`, "alt")} class="w-full h-auto block select-none"${addAttribute(index < 2 ? "eager" : "lazy", "loading")} decoding="async"> </div>`)} </div> </main> <section class="w-full bg-[#fcfbf7] text-center pb-24 px-6"> <div class="max-w-md mx-auto border-t border-stone-200 pt-12 flex flex-col items-center"> <p class="font-sans text-xs text-stone-500 tracking-wide mb-4">
Would you prefer to keep a copy on your device?
</p> <a href="/downloads/Menu-Food-MexOnTheBeach.pdf" download class="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-stone-700 hover:text-[#2c4e4b] font-medium transition-colors duration-200 mb-16"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path> </svg>
Download Menu (PDF)
</a> </div> </section> </div> ` })}`;
}, "C:/mexonthebeach/src/components/MFood.astro", void 0);

export { $$MFood as $ };
