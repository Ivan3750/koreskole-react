"use client";

import React, { useState } from "react";
import { Calendar, User, Mail, Phone } from "lucide-react";

interface BookingFormProps {
  holdId: number;
  holdDate: string;
  holdTime: string;
  holdDays: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ holdId, holdDate, holdTime, holdDays, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // базова валідація
    if (!formData.name || !formData.email) {
      setStatus("error");
      setMessage("Заповніть обовʼязкові поля: імʼя та email.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hold_id: holdId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          birthday: formData.birthday,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Бронювання успішне!");
      } else {
        setStatus("error");
        setMessage(data.error || "Щось пішло не так");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Помилка з сервером");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Book hold</h2>
        <p className="text-sm text-gray-600 mb-6">
          {holdDays} - {holdDate} kl. {holdTime}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Birthday</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {status && (
            <p className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-xl font-semibold mt-2"
          >
            Join hold
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
