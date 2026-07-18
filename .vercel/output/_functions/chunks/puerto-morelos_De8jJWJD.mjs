import { c as createComponent } from './astro-component_BI_dQ-N5.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_-0SZX5Mn.mjs';
import { $ as $$PuertoMorelosSection } from './PuertoMorelosSection_DW3X7lyG.mjs';

const $$PuertoMorelos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PuertoMorelosPage", $$PuertoMorelosSection, {})}`;
}, "C:/mexonthebeach/src/pages/es/puerto-morelos.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/es/puerto-morelos.astro";
const $$url = "/es/puerto-morelos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PuertoMorelos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
