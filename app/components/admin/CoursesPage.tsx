"use client";
import React, { useState } from "react";

type Course = {
  id: number;
  name: string;
  language: "en" | "da";
  start_datetime: string;
  rescheduled_datetime?: string | null;
  days_of_week?: string;
  location?: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<Course>({
    id: 0,
    name: "",
    language: "da",
    start_datetime: "",
    rescheduled_datetime: null,
    days_of_week: "",
 
  });

  const addCourse = () => {
    if (!newCourse.name || !newCourse.start_datetime) return;

    setCourses([
      ...courses,
      { ...newCourse, id: Date.now() }, // простий id для фронтенду
    ]);

    // Очистити форму
    setNewCourse({
      id: 0,
      name: "",
      language: "da",
      start_datetime: "",
      rescheduled_datetime: null,
      days_of_week: "",
 
    });
  };

  const deleteCourse = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6 text-black/80">Kurser</h2>

      {/* Форма додавання */}
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          className="border p-3 rounded w-full md:w-auto flex-1"
          placeholder="Navn på kurs"
          value={newCourse.name}
          onChange={(e) =>
            setNewCourse({ ...newCourse, name: e.target.value })
          }
        />
        <select
          className="border p-3 rounded w-32"
          value={newCourse.language}
          onChange={(e) =>
            setNewCourse({ ...newCourse, language: e.target.value as "en" | "da" })
          }
        >
          <option value="da">DA</option>
          <option value="en">EN</option>
        </select>
        <input
          type="datetime-local"
          className="border p-3 rounded w-52"
          value={newCourse.start_datetime}
          onChange={(e) =>
            setNewCourse({ ...newCourse, start_datetime: e.target.value })
          }
        />
        <input
          type="text"
          className="border p-3 rounded w-32"
          placeholder="Dage (Mon,Wed)"
          value={newCourse.days_of_week}
          onChange={(e) =>
            setNewCourse({ ...newCourse, days_of_week: e.target.value })
          }
        />
       
        <button
          onClick={addCourse}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Tilføj
        </button>
      </div>

      {/* Таблиця курсів */}
      <table className="w-full border-collapse border border-black/20">
        <thead>
          <tr className="bg-black/5">
            <th className="border p-3 text-left">Navn</th>
            <th className="border p-3">Sprog</th>
            <th className="border p-3">Start</th>
            <th className="border p-3">Ny dato</th>
            <th className="border p-3">Dage</th>
             <th className="border p-3">Handling</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td className="border p-3">{c.name}</td>
              <td className="border p-3">{c.language.toUpperCase()}</td>
              <td className="border p-3">{c.start_datetime}</td>
              <td className="border p-3">{c.rescheduled_datetime || "-"}</td>
              <td className="border p-3">{c.days_of_week || "-"}</td>
               <td className="border p-3">
                <button
                  onClick={() => deleteCourse(c.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg"
                >
                  Slet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {courses.length === 0 && (
        <p className="text-black/60 mt-4">Ingen kurser tilføjet endnu.</p>
      )}
    </div>
  );
}