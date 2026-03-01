"use client";
import React from 'react';
function ContactsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold">Contact Settings</h2>
      <input className="border p-2 mt-4 w-full" placeholder="Email" />
      <input className="border p-2 mt-2 w-full" placeholder="Phone" />
      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">Save</button>
    </div>
  );
}
export default ContactsPage;