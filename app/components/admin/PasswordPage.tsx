"use client";
import React from 'react';
export default function PasswordPage() {
  return (
    <div>
      <h2 className="text-xl font-bold">Change Password</h2>
      <input type="password" className="border p-2 mt-4 w-full" placeholder="Old password" />
      <input type="password" className="border p-2 mt-2 w-full" placeholder="New password" />
      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">Update</button>
    </div>
  );
}