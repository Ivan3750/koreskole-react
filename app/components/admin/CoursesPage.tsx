"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "@/app/store/api"

type Course = {
  id: number;
  language: "en" | "da";
  course_date: string;
  start_time: string;
  end_time: string;
  days_of_week?: string;
  session_type?: string[];
 };

const days = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn", "Ikke angivet"];
const sessions = ["Formiddag", "Eftermiddag", "Aften"];

const EMPTY_COURSE: Course = {
  id: 0,
  language: "da",
  course_date: "",
  start_time: "",
  end_time: "",
  days_of_week: "",
  session_type: [],
 };

export default function CoursesPage({ onLogout }: { onLogout: () => void }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [csrf, setCsrf] = useState("");
  const [newCourse, setNewCourse] = useState<Course>(EMPTY_COURSE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const res = await fetch(`${BASE_URL}/session.php`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log("Session data:", data);
      setCsrf(data.csrf ?? "");
      await fetchCourses();
    } catch (err) {
      console.error("Init error:", err);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${BASE_URL}/courses.php`, { 
        credentials: "include" 
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      const data = await res.json();
      const formatted: Course[] = (data.courses ?? []).map((c: any) => ({
        ...c,
        session_type: c.session_type
          ? String(c.session_type).split(",").filter(Boolean)
          : [],
      }));
      setCourses(formatted);
    } catch (err) {
      console.error("Fetch courses error:", err);
    }
  };

  const toggleDay = (day: string) => {
    const selected = newCourse.days_of_week
      ? newCourse.days_of_week.split(",")
      : [];
    let updated: string[];
    if (selected.includes(day)) {
      updated = selected.filter((d) => d !== day);
    } else if (day === "Ikke angivet") {
      updated = ["Ikke angivet"];
    } else {
      updated = [...selected.filter((d) => d !== "Ikke angivet"), day];
    }
    setNewCourse((prev) => ({
      ...prev,
      days_of_week: updated.join(","),
    }));
  };

  const toggleSession = (type: string) => {
    setNewCourse((prev) => {
      const selected = prev.session_type ?? [];
      return {
        ...prev,
        session_type: selected.includes(type)
          ? selected.filter((t) => t !== type)
          : [...selected, type],
      };
    });
  };

  const addCourse = async () => {
    setError("");
    if (!newCourse.course_date || !newCourse.start_time || !newCourse.end_time) {
      setError("Udfyld venligst dato og tidspunkt.");
      return;
    }

    if (!csrf) {
      setError("CSRF token mangler. Genindlæs siden.");
      return;
    }

    setLoading(true);
    try {
      console.log("Sending CSRF token:", csrf);
      
      const payload = {
        language: newCourse.language,
        course_date: newCourse.course_date,
        start_time: newCourse.start_time,
        end_time: newCourse.end_time,
        days_of_week: newCourse.days_of_week,
        session_type: newCourse.session_type?.join(","),
      };

      console.log("Payload:", payload);

      const res = await fetch(`${BASE_URL}/courses.php`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json();
      console.log("Response:", responseData);

      if (res.status === 401) {
        onLogout();
        return;
      }

      if (!res.ok) {
        setError(responseData.error || "Kunne ikke tilføje kursus.");
        return;
      }

      await fetchCourses();
      setNewCourse(EMPTY_COURSE);
    } catch (err) {
      console.error("Add course error:", err);
      setError("Serverfejl - prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  const deleteCourse = async (id: number) => {
    if (!confirm("Er du sikker på at du vil slette?")) return;
    try {
      const res = await fetch(`${BASE_URL}/courses.php?id=${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: { 
          "X-CSRF-TOKEN": csrf 
        },
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      if (res.ok) {
        setCourses((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8">Kurser</h2>
      
      <div className="bg-white p-8 rounded-2xl space-y-8 mb-12">
        <div>
          <label className="block text-sm mb-2">Sprog</label>
          <select
            value={newCourse.language}
            onChange={(e) =>
              setNewCourse((prev) => ({
                ...prev,
                language: e.target.value as "en" | "da",
              }))
            }
            className="p-3 rounded w-40"
          >
            <option value="da">Dansk</option>
            <option value="en">Englesk</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm">Dato</label>
            <input
              type="date"
              className="border p-3 rounded w-full"
              value={newCourse.course_date}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  course_date: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label className="text-sm">Start</label>
            <input
              type="time"
              className="border p-3 rounded w-full"
              value={newCourse.start_time}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  start_time: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label className="text-sm">Slut</label>
            <input
              type="time"
              className="border p-3 rounded w-full"
              value={newCourse.end_time}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  end_time: e.target.value,
                }))
              }
            />
          </div>
        </div>

        

        <div>
          <label className="text-sm mb-2 block">Dage</label>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => {
              const active = newCourse.days_of_week
                ?.split(",")
                .includes(day);
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  type="button"
                  style={{border:"var(--color-border)"}}
                  className={`px-4 py-2 rounded-full transition
                    ${
                      active
                        ? "bg-yellow-400 border-yellow-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-sm mb-2 block">Session</label>
          <div className="grid grid-cols-3 gap-3">
            {sessions.map((s) => {
              const active = newCourse.session_type?.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  style={{border:"var(--color-border)"}}
                  onClick={() => toggleSession(s)}
                  className={`p-3 rounded-xl text-center transition
                    ${
                      active
                        ? "bg-yellow-400 border-yellow-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <button
          onClick={addCourse}
          disabled={loading}
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-xl font-semibold"
        >
          {loading ? "Gemmer..." : "Tilføj kursus"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Sprog</th>
              <th className="p-3">Dato</th>
              <th className="p-3">Tid</th>
              <th className="p-3">Dage</th>
              <th className="p-3">Session</th>
              <th className="p-3">Lokation</th>
              <th className="p-3">Handling</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center">
                  Ingen kurser fundet
                </td>
              </tr>
            ) : (
              courses.map((c) => (
                <tr key={c.id} className="border-t">
                  <td className="p-3 uppercase">{c.language}</td>
                  <td className="p-3">{c.course_date}</td>
                  <td className="p-3">
                    {c.start_time} – {c.end_time}
                  </td>
                  <td className="p-3">{c.days_of_week}</td>
                  <td className="p-3">
                    {c.session_type?.join(", ")}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteCourse(c.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Slet
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}