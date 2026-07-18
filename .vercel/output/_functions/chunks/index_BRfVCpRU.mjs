import { c as createComponent } from './astro-component_BI_dQ-N5.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_-0SZX5Mn.mjs';
import { $ as $$MainComponent } from './MainComponent_Cd1Wr9w5.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainPage", $$MainComponent, {})}`;
}, "C:/mexonthebeach/src/pages/es/index.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
