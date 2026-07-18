import { c as createComponent } from './astro-component_BI_dQ-N5.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_-0SZX5Mn.mjs';
import { $ as $$MFood } from './MFood_B8p363aK.mjs';

const $$MenuFood = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MenuFoodPage", $$MFood, {})}`;
}, "C:/mexonthebeach/src/pages/menu-food.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/menu-food.astro";
const $$url = "/menu-food";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MenuFood,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
