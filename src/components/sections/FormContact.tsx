import { useState } from "react";
import { Modal, Button } from "@heroui/react";

export default function FormContact({ i18n }: { i18n: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulamos la petición o tu fetch hacia la API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Abrimos el modal directamente
      setIsOpen(true);

      // Reseteamos el formulario
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Form Container */}
      <div className="lg:col-span-6 flex justify-center w-full animate-fade-in-up">
        <div className="bg-[#fcfbf7] border border-dark/5 rounded-[100px] p-10 md:p-14 shadow-lg max-w-md w-full relative">
          <h3 className="font-serif text-primary font-extrabold text-center text-xl tracking-wider mb-8 uppercase">
            {i18n.CONTACT.FORM.title}
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                {i18n.CONTACT.FORM.name}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={i18n.CONTACT.FORM.placeholderName}
                className="w-full bg-white text-zinc-700 placeholder:text-zinc-400/60 rounded-2xl px-4 py-3 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                {i18n.CONTACT.FORM.email}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={i18n.CONTACT.FORM.placeholderEmail}
                className="w-full bg-white text-zinc-700 placeholder:text-zinc-400/60 rounded-2xl px-4 py-3 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              />
            </div>
            {/* Message Field */}
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                {i18n.CONTACT.FORM.message}
              </label>
              <textarea
                rows={4}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={i18n.CONTACT.FORM.placeholderMessage}
                className="w-full bg-white text-zinc-700 placeholder:text-zinc-400/60 rounded-2xl px-4 py-3 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border-none shadow-[0_2px_8px_rgba(0,0,0,0.03)] resize-none"
              ></textarea>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="bg-primary hover:bg-primary-hover text-white py-6 px-8 rounded-full font-bold text-xs tracking-widest uppercase w-full shadow-md hover:shadow-lg transition-all duration-300 mt-2 cursor-pointer"
            >
              {isSubmitting ? "" : i18n.CONTACT.FORM.send}
            </Button>
          </form>
        </div>
      </div>
      {/* VENTANA EMERGENTE (MODAL) CORREGIDA PARA HEROUI V3 */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        {/* El Backdrop nativo maneja el desenfoque fijo del viewport */}
        <Modal.Backdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]" />
        {/* Contenedor Flex para el centrado exacto */}
        <Modal.Container className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
          <Modal.Dialog className="bg-white border border-black/5 rounded-3xl p-6 shadow-2xl max-w-sm w-full relative z-[10000] animate-fade-in">
            {/* Trigger de cierre de esquina nativo */}
            <Modal.CloseTrigger className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 cursor-pointer" />
            <Modal.Header className="flex flex-col gap-1 font-serif text-primary uppercase tracking-wider text-center pt-4">
              <Modal.Heading>¡Confirmación!</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="text-zinc-600 text-sm text-center py-4 flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-zinc-800 text-base mb-1">
                  El correo fue enviado con éxito
                </p>
                <p className="text-xs text-zinc-500">
                  {i18n.CONTACT.FORM.successAlert}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-center pb-2">
              <Button
                slot="close"
                color="primary"
                onPress={() => {
                  // 1. Cerramos el modal para indicarle a HeroUI que libere el scroll del body
                  setIsOpen(false);
                  // 2. Redireccionamos a la vista que necesites (ejemplo: a la raíz o a una página de gracias)
                  // Usamos un micro-timeout para asegurar que HeroUI procese el cierre antes de que el navegador cambie de página
                  setTimeout(() => {
                    window.location.href = "/"; // Cambia "/" por la ruta a la que quieras redirigir
                  }, 100);
                }}
                className="font-bold uppercase tracking-widest text-xs bg-primary hover:bg-primary-hover text-white px-8 py-2 rounded-full cursor-pointer transition-all"
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal>
    </>
  );
}
