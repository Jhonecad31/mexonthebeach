import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$MainComponent } from './MainComponent_XhA1Wfy6.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainPage", $$MainComponent, {})}`;
}, "C:/mexonthebeach/src/pages/pt/index.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/pt/index.astro";
const $$url = "/pt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
