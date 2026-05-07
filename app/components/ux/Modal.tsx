"use client";

import React from "react";

type Props = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

const Modal = ({ open, title, message, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <button
          onClick={onClose}
          className="px-6 py-2 rounded-full bg-yellow-400 text-white font-semibold hover:scale-105 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;