import { c as createComponent } from './astro-component_BI_dQ-N5.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate, V as maybeRenderHead } from './entrypoint_-0SZX5Mn.mjs';
import { g as getI18N, $ as $$BaseLayout } from './BaseLayout_BgTqOrz3.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Button, Modal } from '@heroui/react';

function FormContact({ i18n }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (!response.ok) {
        console.error("Error en el servidor:", result.error);
        alert(`Error: ${result.error || "No se pudo enviar el correo."}`);
        return;
      }
      setIsOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error de red al enviar el formulario:", error);
      alert("Ocurrió un problema de conexión al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 flex justify-center w-full animate-fade-in-up", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#fcfbf7] border border-dark/5 rounded-[100px] p-10 md:p-14 shadow-lg max-w-md w-full relative", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-primary font-extrabold text-center text-xl tracking-wider mb-8 uppercase", children: i18n.CONTACT.FORM.title }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5", children: i18n.CONTACT.FORM.name }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "name",
              required: true,
              value: formData.name,
              onChange: handleChange,
              placeholder: i18n.CONTACT.FORM.placeholderName,
              className: "w-full bg-white text-zinc-700 placeholder:text-zinc-400/60 rounded-2xl px-4 py-3 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5", children: i18n.CONTACT.FORM.email }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              required: true,
              value: formData.email,
              onChange: handleChange,
              placeholder: i18n.CONTACT.FORM.placeholderEmail,
              className: "w-full bg-white text-zinc-700 placeholder:text-zinc-400/60 rounded-2xl px-4 py-3 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5", children: i18n.CONTACT.FORM.message }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 4,
              name: "message",
              required: true,
              value: formData.message,
              onChange: handleChange,
              placeholder: i18n.CONTACT.FORM.placeholderMessage,
              className: "w-full bg-white text-zinc-700 placeholder:text-zinc-400/60 rounded-2xl px-4 py-3 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none shadow-[0_2px_8px_rgba(0,0,0,0.03)] resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            isLoading: isSubmitting,
            className: "bg-primary hover:bg-primary-hover text-white py-6 px-8 rounded-full font-bold text-xs tracking-widest uppercase w-full shadow-md hover:shadow-lg transition-all duration-300 mt-2 cursor-pointer",
            children: isSubmitting ? "" : i18n.CONTACT.FORM.send
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Modal, { isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(Modal.Backdrop, { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]" }),
      /* @__PURE__ */ jsx(Modal.Container, { className: "fixed inset-0 flex items-center justify-center z-[9999] p-4", children: /* @__PURE__ */ jsxs(Modal.Dialog, { className: "bg-white border border-black/5 rounded-3xl p-6 shadow-2xl max-w-sm w-full relative z-[10000] animate-fade-in", children: [
        /* @__PURE__ */ jsx(Modal.CloseTrigger, { className: "absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 cursor-pointer" }),
        /* @__PURE__ */ jsx(Modal.Header, { className: "flex flex-col gap-1 font-serif text-primary uppercase tracking-wider text-center pt-4", children: /* @__PURE__ */ jsx(Modal.Heading, { children: "¡Confirmación!" }) }),
        /* @__PURE__ */ jsxs(Modal.Body, { className: "text-zinc-600 text-sm text-center py-4 flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500", children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2.5",
              stroke: "currentColor",
              className: "w-6 h-6",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M4.5 12.75l6 6 9-13.5"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-zinc-800 text-base mb-1", children: "El correo fue enviado con éxito" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-zinc-500", children: i18n.CONTACT.FORM.successAlert })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Modal.Footer, { className: "justify-center pb-2", children: /* @__PURE__ */ jsx(
          Button,
          {
            slot: "close",
            color: "primary",
            onPress: () => {
              setIsOpen(false);
              setTimeout(() => {
                window.location.href = "/";
              }, 100);
            },
            className: "font-bold uppercase tracking-widest text-xs bg-primary hover:bg-primary-hover text-white px-8 py-2 rounded-full cursor-pointer transition-all",
            children: "Cerrar"
          }
        ) })
      ] }) })
    ] })
  ] });
}

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContactSection;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <!-- CONTACT SECTION --> <section class="bg-white py-20 relative mt-10"> <div class="max-w-6xl mx-auto px-6"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"> <div class="lg:col-span-6 space-y-8"> <div> <h2 class="font-serif text-2xl md:text-3xl font-extrabold text-[#4e8782] tracking-wider uppercase"> ${i18n.CONTACT.title} </h2> <p class="text-zinc-600 font-light mt-4 text-xs md:text-sm leading-relaxed max-w-md"> ${i18n.CONTACT.subtitle} </p> </div> <div class="space-y-6"> <!-- Item 1: Address --> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-secondary/10 text-[#4e8782] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h4 class="font-bold text-[10px] text-primary tracking-widest uppercase">${i18n.CONTACT.INFO.address.title}</h4> <p class="text-xs text-zinc-700 font-semibold mt-0.5">${i18n.CONTACT.INFO.address.value}</p> </div> </div> <!-- Item 2: Phone --> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-secondary/10 text-[#4e8782] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-bold text-[10px] text-primary tracking-widest uppercase">${i18n.CONTACT.INFO.phone.title}</h4> <p class="text-xs text-zinc-700 font-semibold mt-0.5">${i18n.CONTACT.INFO.phone.value}</p> </div> </div> <!-- Item 3: Email --> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-secondary/10 text-[#4e8782] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h4 class="font-bold text-[10px] text-primary tracking-widest uppercase">${i18n.CONTACT.INFO.email.title}</h4> <p class="text-xs text-zinc-700 font-semibold mt-0.5">${i18n.CONTACT.INFO.email.value}</p> </div> </div> </div> <!-- Social share links --> <div class="pt-6"> <h5 class="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-3">FOLLOW</h5> <div class="flex space-x-3"> <a href="https://www.facebook.com/mexonthebeachmx" aria-label="Facebook" class="w-12 h-12 rounded-full border border-primary/20 hover:border-primary bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.5.5-1 1-1h3V2h-3c-2.5 0-4 1.5-4 4v2z"></path> </svg> </a> <a href="https://www.instagram.com/mexonthebeachmx/" aria-label="Instagram" class="w-12 h-12 rounded-full border border-primary/20 hover:border-primary bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg> </a> </div> </div> </div> <!-- COMPONENTE HIDRATADO DE REACT --> ${renderComponent($$result2, "FormContactReact", FormContact, { "i18n": i18n, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/FormContact", "client:component-export": "default" })} </div> </div> </section> <!-- MAP SECTION --> <section class="relative w-full overflow-hidden bg-[#fcfbf7]"> <div class="grid min-h-[460px] grid-cols-1 md:grid-cols-[42%_1fr]"> <!-- LEFT COLUMN --> <div class="flex items-center justify-center px-6 py-10 md:pl-12 md:pr-6"> <div class="flex w-full max-w-full flex-col gap-[1.35rem] rounded-[20px] bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.09),0_2px_10px_rgba(0,0,0,0.04)] md:max-w-[310px]"> <h2 class="font-serif text-[clamp(1.3rem,2vw,1.75rem)] font-bold leading-tight text-[#4e8782]"> ${i18n.PUERTO_MORELOS.MAPS.title} </h2> <a href="https://maps.google.com/?q=Heriberto+Frías+Supermanzana+2+Manzana+14+L3+77580+Puerto+Morelos+QR" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-3 rounded-xl p-2 -mx-2 transition-colors duration-200 hover:bg-[rgba(27,92,87,0.04)] no-underline"> <span class="mt-0.5 flex h-[1.9rem] w-[1.9rem] shrink-0 items-center justify-center rounded-full bg-[rgba(211,66,50,0.12)] text-[#d34232] transition-transform duration-200 group-hover:scale-105"> <svg class="h-[0.88rem] w-[0.88rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path> <circle cx="12" cy="9" r="2.5"></circle> </svg> </span> <div> <p class="mb-[0.22rem] text-[0.6rem] font-bold tracking-[0.12em] uppercase text-[#1b5c57]"> ${i18n.PUERTO_MORELOS.MAPS.strategic_location_label} </p> <p class="text-[0.76rem] font-medium leading-normal text-[#342e26] transition-colors duration-200 group-hover:text-[#4e8782]">
Heriberto Frías, Supermanzana 2, Manzana 14 L3, 77580 Puerto Morelos, Q.R.
</p> </div> </a> <div class="flex items-start gap-3"> <span class="mt-0.5 flex h-[1.9rem] w-[1.9rem] shrink-0 items-center justify-center rounded-full bg-[rgba(196,128,36,0.12)] text-[#c07e22]"> <svg class="h-[0.88rem] w-[0.88rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="9"></circle> <polyline points="12 7 12 12 15.5 15.5"></polyline> </svg> </span> <div class="flex-1"> <p class="mb-[0.22rem] text-[0.6rem] font-bold tracking-[0.12em] uppercase text-[#1b5c57]"> ${i18n.PUERTO_MORELOS.MAPS.travel_times_label} </p> <ul class="flex flex-col gap-[0.42rem] p-0 m-0 list-none"> ${i18n.PUERTO_MORELOS.MAPS.travel_times.map((item) => renderTemplate`<li class="flex items-center justify-between gap-2"> <span class="text-[0.74rem] font-normal text-[#6b6055]"> ${item.from} </span> <span class="text-[0.74rem] font-bold text-[#4e8782] whitespace-nowrap"> ${item.time} </span> </li>`)} </ul> </div> </div> <a href="https://maps.google.com/?q=Heriberto+Frías+Supermanzana+2+Manzana+14+L3+77580+Puerto+Morelos+QR" target="_blank" rel="noopener noreferrer" class="mt-0.5 block rounded-full bg-[#4e8782] px-4 py-[0.82rem] text-center text-[0.7rem] font-semibold tracking-[0.04em] text-white no-underline shadow-[0_3px_12px_rgba(27,92,87,0.22)] transition-all duration-200 hover:-translate-y-px hover:bg-[#144844] hover:shadow-[0_6px_18px_rgba(27,92,87,0.30)]" id="find-us-maps-btn"> ${i18n.PUERTO_MORELOS.MAPS.open_maps_button} </a> </div> </div> <div class="relative min-h-[280px] overflow-hidden md:min-h-full"> <div class="pointer-events-none absolute top-1/2 left-1/2 z-10 inline-flex -translate-x-1/2 -translate-y-2/3 items-center gap-[0.3rem] rounded-full bg-white px-[0.85rem] py-[0.38rem] pl-[0.55rem] text-[0.7rem] font-bold text-[#1b5c57] whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.15)] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-top-white" aria-hidden="true"> <svg class="h-[0.75rem] w-[0.75rem] fill-[#4e8782]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path> </svg>
Mex on the Beach
</div> <iframe id="find-us-map-iframe" title="Mex on the Beach Location Map" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=-86.8795%2C20.8490%2C-86.8655%2C20.8590&layer=mapnik&marker=20.8541%2C-86.8726" class="absolute inset-0 h-full w-full border-none saturate-[0.65] brightness-[1.04] sepia-[0.12]"></iframe> <div class="pointer-events-none absolute inset-0 z-0 hidden bg-gradient-to-r from-[#fcfbf7] via-[rgba(237,233,223,0.4)] to-transparent md:block md:w-[22%]" aria-hidden="true"></div> </div> </div> </section> </div> ` })}`;
}, "C:/mexonthebeach/src/components/ContactSection.astro", void 0);

export { $$ContactSection as $ };
