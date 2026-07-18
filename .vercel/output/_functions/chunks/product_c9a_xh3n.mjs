import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$Product$1 } from './Product_BZupn5-h.mjs';

const $$Product = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProductPage", $$Product$1, {})}`;
}, "C:/mexonthebeach/src/pages/pt/product.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/pt/product.astro";
const $$url = "/pt/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Product,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
