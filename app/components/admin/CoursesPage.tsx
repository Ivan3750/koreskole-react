  "use client";

  import React, { useEffect, useState } from "react";

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

  export default function CoursesPage() {
    const API_URL = "http://localhost:8000/courses.php";

    const [courses, setCourses] = useState<Course[]>([]);
    const [csrf, setCsrf] = useState<string>("");

    const [newCourse, setNewCourse] = useState<Course>({
      id: 0,
      language: "da",
      course_date: "",
      start_time: "",
      end_time: "",
      days_of_week: "",
      session_type: [],
    });

    useEffect(() => {
      init();
    }, []);

    const init = async () => {
      try {
        const res = await fetch("http://localhost:8000/session.php", {
          credentials: "include",
        });

        const data = await res.json();

        setCsrf(data.csrf || data.token || "");

        await fetchCourses();
      } catch (err) {
        console.error("INIT ERROR:", err);
      }
    };

    const fetchCourses = async () => {
      try {
        const res = await fetch(API_URL, {
          credentials: "include",
        });

        const data = await res.json();

        console.log("COURSES RESPONSE:", data);

        const raw = data.courses ?? [];

        const formatted: Course[] = raw.map((c: any) => ({
          ...c,
          session_type: c.session_type
            ? String(c.session_type).split(",").filter(Boolean)
            : [],
        }));

        setCourses(formatted);
      } catch (err) {
        console.error("FETCH COURSES ERROR:", err);
        setCourses([]);
      }
    };

    const toggleDay = (day: string) => {
      const selected = newCourse.days_of_week
        ? newCourse.days_of_week.split(",")
        : [];

      let updated: string[] = [];

      if (selected.includes(day)) {
        updated = selected.filter((d) => d !== day);
      } else {
        if (day === "Ikke angivet") {
          updated = ["Ikke angivet"];
        } else {
          updated = [...selected.filter((d) => d !== "Ikke angivet"), day];
        }
      }

      setNewCourse((prev) => ({
        ...prev,
        days_of_week: updated.join(","),
      }));
    };

    const toggleSession = (type: string) => {
      setNewCourse((prev) => {
        const selected = prev.session_type || [];

        return {
          ...prev,
          session_type: selected.includes(type)
            ? selected.filter((t) => t !== type)
            : [...selected, type],
        };
      });
    };

    const addCourse = async () => {
      try {
        await fetch(API_URL, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrf,
          },
          body: JSON.stringify({
            language: newCourse.language,
            course_date: newCourse.course_date,
            start_time: newCourse.start_time,
            end_time: newCourse.end_time,
            days_of_week: newCourse.days_of_week,
            session_type: newCourse.session_type?.join(","),
          }),
        });

        await fetchCourses();

        setNewCourse({
          id: 0,
          language: "da",
          course_date: "",
          start_time: "",
          end_time: "",
          days_of_week: "",
          session_type: [],
        });
      } catch (err) {
        console.error("ADD COURSE ERROR:", err);
      }
    };

    const deleteCourse = async (id: number) => {
      try {
        await fetch(`${API_URL}?id=${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "X-CSRF-TOKEN": csrf,
          },
        });

        setCourses((prev) => prev.filter((c) => c.id !== id));
      } catch (err) {
        console.error("DELETE ERROR:", err);
      }
    };

    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Kurser</h2>

        {/* FORM */}
        <div className="border rounded-xl p-6 mb-10 space-y-4">
          <div className="flex gap-3 flex-wrap">
            <select
              value={newCourse.language}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  language: e.target.value as "en" | "da",
                }))
              }
              className="border p-3 rounded"
            >
              <option value="da">DA</option>
              <option value="en">EN</option>
            </select>

            <input
              type="date"
              className="border p-3 rounded"
              value={newCourse.course_date}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  course_date: e.target.value,
                }))
              }
            />

            <input
              type="time"
              className="border p-3 rounded"
              value={newCourse.start_time}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  start_time: e.target.value,
                }))
              }
            />

            <input
              type="time"
              className="border p-3 rounded"
              value={newCourse.end_time}
              onChange={(e) =>
                setNewCourse((prev) => ({
                  ...prev,
                  end_time: e.target.value,
                }))
              }
            />
          </div>

          {/* DAYS */}
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-3 py-1 border rounded ${
                  newCourse.days_of_week?.includes(day)
                    ? "bg-yellow-400 border-yellow-400"
                    : ""
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* SESSIONS */}
          <div className="flex gap-4 flex-wrap">
            {sessions.map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newCourse.session_type?.includes(s)}
                  onChange={() => toggleSession(s)}
                />
                {s}
              </label>
            ))}
          </div>

          <button
            onClick={addCourse}
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold"
          >
            Tilføj
          </button>
        </div>

        {/* TABLE */}
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Sprog</th>
              <th className="border p-3">Dato</th>
              <th className="border p-3">Tid</th>
              <th className="border p-3">Dage</th>
              <th className="border p-3">Handling</th>
            </tr>
          </thead>

          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan={5}>
                  Ingen kurser fundet
                </td>
              </tr>
            ) : (
              courses.map((c) => (
                <tr key={c.id}>
                  <td className="border p-3">{c.language}</td>
                  <td className="border p-3">{c.course_date}</td>
                  <td className="border p-3">
                    {c.start_time} - {c.end_time}
                  </td>
                  <td className="border p-3">{c.days_of_week}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => deleteCourse(c.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
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
    );
  }