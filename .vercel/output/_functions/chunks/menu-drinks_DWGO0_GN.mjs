import { c as createComponent } from './astro-component_BI_dQ-N5.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_-0SZX5Mn.mjs';
import { $ as $$MDrinks } from './MDrinks_BIzfQcye.mjs';

const $$MenuDrinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MenuDrinksPage", $$MDrinks, {})}`;
}, "C:/mexonthebeach/src/pages/es/menu-drinks.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/es/menu-drinks.astro";
const $$url = "/es/menu-drinks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MenuDrinks,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
