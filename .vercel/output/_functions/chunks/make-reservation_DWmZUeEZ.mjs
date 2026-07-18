import { c as createComponent } from './astro-component_D8xAmZVL.mjs';
import 'piccolore';
import { a0 as renderComponent, u as renderTemplate } from './entrypoint_yAU3LSnf.mjs';
import { $ as $$MakeReservation$1 } from './MakeReservation_CLenz-Cq.mjs';

const $$MakeReservation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MakeReservationPage", $$MakeReservation$1, {})}`;
}, "C:/mexonthebeach/src/pages/make-reservation.astro", void 0);

const $$file = "C:/mexonthebeach/src/pages/make-reservation.astro";
const $$url = "/make-reservation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MakeReservation,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
