import { Resend } from 'resend';

const prerender = false;
const resend = new Resend("re_MXXVZiuC_KgfqcWEe45yj74KRNFGXW6Df");
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const response = await resend.emails.send({
      from: "Mex on the Beach <onboarding@resend.dev>",
      to: ["backend.extreme@gmail.com"],
      subject: `Nuevo mensaje de ${name} - Mex on the Beach`,
      reply_to: email,
      html: `
        <div style="font-family: 'Playfair Display', 'Georgia', serif; color: #342e26; max-width: 600px; margin: 40px auto; background-color: #fcfbf7; padding: 50px 40px; border-radius: 40px; border: 1px solid rgba(78, 135, 130, 0.08); box-shadow: 0 15px 35px rgba(27, 92, 87, 0.03);">
          
          <!-- BRAND HEADER (Inspirado en tu Navbar) -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="text-align: center;">
            <tr>
              <td style="padding-bottom: 30px;">
                <p style="font-family: 'Montserrat', sans-serif; font-size: 9px; color: #f25c27; text-transform: uppercase; letter-spacing: 3px; margin: 0 0 10px 0; font-weight: 700;">
                  THE AUTHENTIC CARIBBEAN
                </p>
                <h1 style="color: #1b5c57; font-size: 26px; font-weight: 700; margin: 0; font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.2;">
                  Mex on the Beach
                </h1>
                <div style="width: 50px; height: 1.5px; background-color: #f25c27; margin: 18px auto 0 auto;"></div>
              </td>
            </tr>
          </table>

          <!-- INFO PRINCIPAL (Estilo tus tarjetas de beneficios) -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 10px; margin-bottom: 30px; font-family: sans-serif;">
            <tr>
              <td style="padding: 24px 30px; background-color: #ffffff; border-radius: 20px; border: 1px solid rgba(78,135,130,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.01);">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding-bottom: 14px;">
                      <span style="color: #4e8782; text-transform: uppercase; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; display: block; margin-bottom: 4px;">Nombre del Cliente</span>
                      <span style="font-size: 15px; color: #342e26; font-weight: 600;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 14px; border-top: 1px solid #f6f5ef;">
                      <span style="color: #4e8782; text-transform: uppercase; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; display: block; margin-bottom: 4px;">Email de Contacto</span>
                      <a href="mailto:${email}" style="font-size: 14px; color: #f25c27; text-decoration: none; font-weight: 600;">${email}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- SECCIÓN DEL MENSAJE -->
          <div style="margin-top: 10px;">
            <h3 style="color: #1b5c57; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px 10px; font-family: sans-serif; font-weight: 700;">
              Mensaje Recibido
            </h3>
            <div style="font-family: 'Playfair Display', 'Georgia', serif; background-color: #ffffff; padding: 35px; border-radius: 24px; border: 1px solid rgba(78,135,130,0.06); font-size: 15px; line-height: 1.8; color: #4a443c; font-style: italic; box-shadow: 0 4px 12px rgba(0,0,0,0.01);">
              "${message.replace(/\n/g, "<br/>")}"
            </div>
          </div>

          <!-- FOOTER EDITORIAL -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 50px; text-align: center; font-family: sans-serif;">
            <tr>
              <td>
                <p style="font-size: 9px; color: #b5b0a7; letter-spacing: 1.5px; margin: 0; text-transform: uppercase; font-weight: 500;">
                  Sent from Puerto Morelos Beach Club Platform
                </p>
                <p style="font-size: 9px; color: #c4bebe; margin: 8px 0 0 0;">
                  © ${(/* @__PURE__ */ new Date()).getFullYear()} Mex on the Beach. Todos los derechos reservados.
                </p>
              </td>
            </tr>
          </table>

        </div>
      `
    });
    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error sending email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
