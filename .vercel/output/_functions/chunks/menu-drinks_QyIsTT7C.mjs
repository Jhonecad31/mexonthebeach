import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$MDrinks } from './MDrinks_bGoEPwNn.mjs';

const $$MenuDrinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MenuDrinksPage", $$MDrinks, {})}`;
}, "C:/mexonthebeach/src/pages/menu-drinks.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/menu-drinks.astro";
const $$url = "/menu-drinks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MenuDrinks,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
