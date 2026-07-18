import { Resend } from 'resend';

const resend = new Resend("re_MXXVZiuC_KgfqcWEe45yj74KRNFGXW6Df");
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const date = formData.get("date");
    const adults = formData.get("adults");
    const children = formData.get("children");
    const fullName = formData.get("fullName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");
    const bookingRef = `SNO-${Math.floor(1e7 + Math.random() * 9e7)}`;
    const productRef = `SNO-T${Math.floor(1e7 + Math.random() * 9e7)}`;
    const createdDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }) + ` @ ${(/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
    const paxText = `${adults} ${Number(adults) > 1 ? "Adults" : "Adult"}${Number(children) > 0 ? `, ${children} ${Number(children) > 1 ? "Children" : "Child"}` : ""}`;
    const htmlEmail = `
      <p style="font-family: Arial, sans-serif; font-size: 14px; color: #333; margin-bottom: 15px;">The following booking was just created.</p>
      
      <table style="width: 100%; max-width: 600px; border-collapse: collapse; border: 1px solid #000000; font-family: Arial, sans-serif; font-size: 13px; color: #000000;">
        <!-- Bloque Superior: Datos del Producto -->
        <tr>
          <td style="width: 30%; background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Booking ref.</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0;">${bookingRef}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Product booking ref.</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0; color: #3b5998;">${productRef}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Product</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0; font-weight: bold;">Mex on the Beach Pass / Half Day Experience</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #000000; vertical-align: top;">Booking channel</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #000000; color: #3b5998;">www.mexonthebeach.com</td>
        </tr>

        <!-- Bloque Inferior: Datos del Cliente -->
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Customer</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0;">${fullName}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Customer email</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0; color: #3b5998;">${email}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Customer phone</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0;">${phone}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Date</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0; font-weight: bold;">${date}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">PAX</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0;">${paxText}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; border-bottom: 1px solid #D0D0D0; vertical-align: top;">Booking questions / Message</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #D0D0D0; font-style: italic; color: #444;">${message || "None"}</td>
        </tr>
        <tr>
          <td style="background-color: #EBEBEB; padding: 8px 12px; text-align: right; font-weight: bold; vertical-align: top;">Created</td>
          <td style="padding: 8px 12px;">${createdDate}</td>
        </tr>
      </table>
    `;
    await resend.emails.send({
      from: "Reservations Mex On The Beach <onboarding@resend.dev>",
      to: ["backend.extreme@gmail.com"],
      subject: `New Reservation Request: ${bookingRef} - ${fullName}`,
      html: htmlEmail
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: "Internal Error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
