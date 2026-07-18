import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$MFood } from './MFood_CWXppzXK.mjs';

const $$MenuFood = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MenuFoodPage", $$MFood, {})}`;
}, "C:/mexonthebeach/src/pages/pt/menu-food.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/pt/menu-food.astro";
const $$url = "/pt/menu-food";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MenuFood,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
