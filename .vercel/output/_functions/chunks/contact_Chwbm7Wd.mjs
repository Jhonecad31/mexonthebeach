import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$ContactSection } from './ContactSection_B7Ckdg6Q.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContactPage", $$ContactSection, {})}`;
}, "C:/mexonthebeach/src/pages/es/contact.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/es/contact.astro";
const $$url = "/es/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
