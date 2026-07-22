import { useState } from "react";
import { Modal, Button } from "@heroui/react";

export default function FormContact({ i18n }: { i18n: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // 1. Agregado al estado
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        console.error("Error en el servidor:", result.error);
        alert(`Error: ${result.error || "No se pudo enviar el correo."}`);
        return;
      }
      setIsOpen(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error de red al enviar el formulario:", error);
      alert("Ocurrió un problema de conexión al enviar el formulario.");
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

            {/* Phone Field */}
            <div>
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                {i18n.CONTACT.FORM.phone || "Teléfono"}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={i18n.CONTACT.FORM.placeholderPhone || "+52 998 ..."}
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

      {/* Modal / Toast de estado */}
      <div
        id="status-modal"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300"
      >
        <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl transition-all scale-95">
          <div
            id="status-icon-container"
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl"
          >
            <span id="status-icon">✓</span>
          </div>

          <div className="space-y-1">
            <h3
              id="status-title"
              className="font-serif font-bold text-stone-800 text-xl"
            >
              Request Sent!
            </h3>
            <p
              id="status-message"
              className="text-stone-500 text-xs md:text-sm"
            >
              We have received your request. We will contact you soon!
            </p>
          </div>

          <button
            id="close-status-modal-btn"
            type="button"
            className="w-full bg-primary hover:bg-primary-hover text-white text-xs md:text-sm font-bold tracking-wider uppercase py-3 rounded-xl transition-colors cursor-pointer"
          >
            Great!
          </button>
        </div>
      </div>
    </>
  );
}