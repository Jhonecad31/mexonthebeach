import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$PuertoMorelosSection } from './PuertoMorelosSection_DYdk22d1.mjs';

const $$PuertoMorelos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PuertoMorelosPage", $$PuertoMorelosSection, {})}`;
}, "C:/mexonthebeach/src/pages/pt/puerto-morelos.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/pt/puerto-morelos.astro";
const $$url = "/pt/puerto-morelos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PuertoMorelos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
