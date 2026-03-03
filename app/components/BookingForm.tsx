"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";

interface BookingFormProps {
  holdId: number;
  holdDate: string;
  holdTime: string;
  holdDays: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ holdId, holdDate, holdTime, holdDays, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", birthday: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus("error");
      setMessage(
        !formData.name
          ? t("bookingForm.nameRequired")
          : t("bookingForm.emailRequired")
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/book.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hold_id: holdId, ...formData }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(t("bookingForm.success"));
      } else {
        setStatus("error");
        setMessage(data.error || t("bookingForm.error"));
      }
    } catch {
      setStatus("error");
      setMessage(t("bookingForm.serverError"));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 font-bold text-xl">
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">{t("bookingForm.heading")}</h2>
        <p className="text-sm text-gray-600 mb-6">
          {holdDays} - {holdDate} kl. {holdTime}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">{t("bookingForm.name")} *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg" required />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">{t("bookingForm.email")} *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg" required />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">{t("bookingForm.phone")}</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">{t("bookingForm.birthday")}</label>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg" />
          </div>

          {status && (
            <p className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}

          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-xl font-semibold mt-2">
            {t("bookingForm.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;