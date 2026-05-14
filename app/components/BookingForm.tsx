"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { BASE_URL } from "@/app/lib/api";

interface BookingFormProps {
  holdId: number;
  holdDate: string;
  holdTime: string;
  holdDays: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  holdId,
  holdDate,
  holdTime,
  holdDays,
  onClose,
}) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      const res = await fetch(`${BASE_URL}/book.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hold_id: holdId,
          ...formData,
        }),
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
    <div
      className="fixed inset-0 flex justify-center items-center z-50 px-4"
      style={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="relative w-full max-w-md p-8"
        style={{
          background: "var(--color-bg)",
          color: "var(--color-text)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-2)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl transition-opacity hover:opacity-70"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-3">
          {t("bookingForm.heading")}
        </h2>

        <p
          className="text-sm mb-6"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {holdDays} - {holdDate} kl. {holdTime}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label={`${t("bookingForm.name")} *`}
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />

          <FormField
            label={`${t("bookingForm.email")} *`}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormField
            label={t("bookingForm.phone")}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />

          <FormField
            label={t("bookingForm.birthday")}
            name="birthday"
            type="date"
            value={formData.birthday}
            onChange={handleChange}
          />

          {status && (
            <p
              className="text-sm font-medium"
              style={{
                color:
                  status === "success"
                    ? "#22c55e"
                    : "var(--color-danger)",
              }}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
            style={{
              background: "var(--color-primary)",
              color: "#111",
              borderRadius: "calc(var(--radius) - 6px)",
              boxShadow: "var(--shadow-1)",
            }}
          >
            {t("bookingForm.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        className="block text-sm font-semibold mb-2"
        style={{
          color: "var(--color-text)",
        }}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 outline-none transition-all duration-200"
        style={{
          background: "var(--color-input-bg)",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
          borderRadius: "calc(var(--radius) - 8px)",
        }}
        onFocus={(e) => {
          e.target.style.border = "1px solid var(--color-primary)";
          e.target.style.boxShadow =
            "0 0 0 3px rgba(242, 183, 5, 0.15)";
        }}
        onBlur={(e) => {
          e.target.style.border = "1px solid var(--color-border)";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
};

export default BookingForm;