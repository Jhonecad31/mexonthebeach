import { c as createComponent } from './astro-component_BI_dQ-N5.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_-0SZX5Mn.mjs';
import { $ as $$Product$1 } from './Product_DHN-q4As.mjs';

const $$Product = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProductPage", $$Product$1, {})}`;
}, "C:/mexonthebeach/src/pages/product.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/product.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Product,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
