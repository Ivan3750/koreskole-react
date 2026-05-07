"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/i18n";

const Modal = ({ open, onClose }: any) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl text-center max-w-sm w-full"
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-xl font-bold mb-2">Message sent</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent. We will contact you soon.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2 bg-yellow-400 text-white rounded-full"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Spinner = () => (
  <motion.div
    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
  />
);

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact_page.phoneLabel"),
      value: "20 76 03 33",
      href: "tel:20760333",
    },
    {
      icon: Mail,
      label: t("contact_page.emailLabel"),
      value: "hello@lønbæks.dk",
      href: "mailto:hello@lønbæks.dk",
    },
    {
      icon: MapPin,
      label: t("contact_page.addressLabel"),
      value: "Vestre Engvej 7\n7100 Vejle",
      href: "https://maps.google.com/?q=Lønbæks+Køreskole,+Vestre+Engvej+7,+7100+Vejle",
    },
  ];

  const handleChange = (e: any) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setModal(true);
      } else {
        alert(data.message || "Error");
      }
    } catch {
      alert("Network error");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 max-w-6xl m-auto" style={{ background: "var(--color-bg)" }}>
      
      <Modal open={modal} onClose={() => setModal(false)} />

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

      
          <div
           
          >
            <span className="text-sm uppercase font-semibold" style={{ color: "var(--color-yellow)" }}>
              {t("contact.label")}
            </span>

            <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: "var(--color-text)" }}>
              {t("contact.heading")}
            </h2>

            <p className="mb-10" style={{ color: "var(--color-text-secondary)" }}>
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href} className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl"
                    style={{ background: "var(--color-yellow-bg)" }}>
                    <item.icon className="w-5 h-5" style={{ color: "var(--color-yellow)" }} />
                  </div>

                  <div>
                    <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {item.label}
                    </div>
                    <div className="font-semibold whitespace-pre-line" style={{ color: "var(--color-text)" }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            
            className="space-y-6 p-10 rounded-3xl "
            style={{ background: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}
          >

<label className="block mb-2 font-semibold" style={{ color: "var(--color-text)" }} > {t("contact_page.nameLabel")} </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-4 rounded-xl border"
              required
            />
<label className="block mb-2 font-semibold" style={{ color: "var(--color-text)" }} > {t("contact_page.emailLabel")} </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 rounded-xl border"
              required
            />
<label className="block mb-2 font-semibold" style={{ color: "var(--color-text)" }} > {t("contact_page.messageLabel")} </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-4 rounded-xl border h-40"
               
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition disabled:opacity-60"
              style={{ background: "var(--color-yellow)", color: "white" }}
            >
              {loading ? <Spinner /> : "Send"}
            </button>

          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          <div className="h-80 rounded-2xl overflow-hidden ">
            <iframe
              src="https://maps.google.com/?q=Lønbæks+Køreskole+Vejle&output=embed"
              width="100%"
              height="100%"
            />
          </div>

          <div className="p-6 rounded-2xl  flex flex-col justify-around"             style={{ background: "var(--color-bg-elevated)", borderColor: "var(--color-border)" }}
>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5" style={{ color: "var(--color-yellow)" }} />
              <h3 className="font-semibold">{t("contact.hoursTitle")}</h3>
            </div>

            <div className="text-sm space-y-3">
              <div className="flex justify-between">
                <span>Teori</span>
                <span>{t("contact.hours.theory")}</span>
              </div>
              <div className="flex justify-between">
                <span>Kørsel</span>
                <span>{t("contact.hours.driving")}</span>
              </div>
              <div className="flex justify-between">
                <span>Telefon</span>
                <span>{t("contact.hours.phone")}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;