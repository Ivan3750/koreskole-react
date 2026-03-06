"use client";

import React, { useEffect, useState } from "react";

type Course = {
  id: number;
  language: "en" | "da";
  date: string;
  start_time: string;
  end_time: string;
  days_of_week?: string;
  session_type?: string[];
};

const days = [
  "Man",
  "Tir",
  "Ons",
  "Tor",
  "Fre",
  "Lør",
  "Søn",
  "Ikke angivet",
];

const sessions = [
  "Formiddag",
  "Eftermiddag",
  "Aften",
];

export default function CoursesPage() {

  const API_URL = "http://localhost:8000/courses.php";

  const [courses, setCourses] = useState<Course[]>([]);
  const [csrf, setCsrf] = useState<string>("");

  const [newCourse, setNewCourse] = useState<Course>({
    id: 0,
    language: "da",
    date: "",
    start_time: "",
    end_time: "",
    days_of_week: "",
    session_type: [],
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {

    /*
    GET CSRF TOKEN
    */

    const csrfRes = await fetch("http://localhost:8000/session.php", {
      credentials: "include"
    });

    const csrfData = await csrfRes.json();
    setCsrf(csrfData.csrf);

    fetchCourses();
  };

  const fetchCourses = async () => {

    const res = await fetch(API_URL, {
      credentials: "include"
    });

    const data = await res.json();
    setCourses(data);
  };

  /*
  DAY PICKER
  */

  const toggleDay = (day: string) => {

    const selected = newCourse.days_of_week
      ? newCourse.days_of_week.split(",")
      : [];

    if (selected.includes(day)) {

      const updated = selected.filter(d => d !== day).join(",");

      setNewCourse({ ...newCourse, days_of_week: updated });

      return;
    }

    if (day === "Ikke angivet") {

      setNewCourse({ ...newCourse, days_of_week: "Ikke angivet" });
      return;

    }

    const updated = [...selected.filter(d => d !== "Ikke angivet"), day].join(",");

    setNewCourse({ ...newCourse, days_of_week: updated });

  };

  /*
  SESSION TYPE
  */

  const toggleSession = (type: string) => {

    const selected = newCourse.session_type || [];

    if (selected.includes(type)) {

      setNewCourse({
        ...newCourse,
        session_type: selected.filter(t => t !== type)
      });

    } else {

      setNewCourse({
        ...newCourse,
        session_type: [...selected, type]
      });

    }

  };

  /*
  CREATE COURSE
  */

  const addCourse = async () => {

    await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrf
      },
      body: JSON.stringify({
        language: newCourse.language,
        course_date: newCourse.date,
        start_time: newCourse.start_time,
        end_time: newCourse.end_time,
        days_of_week: newCourse.days_of_week,
        session_type: newCourse.session_type?.join(",")
      })
    });

    fetchCourses();

    setNewCourse({
      id: 0,
      language: "da",
      date: "",
      start_time: "",
      end_time: "",
      days_of_week: "",
      session_type: [],
    });

  };

  /*
  DELETE COURSE
  */

  const deleteCourse = async (id: number) => {

    await fetch(`${API_URL}?id=${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "X-CSRF-TOKEN": csrf
      }
    });

    setCourses(prev => prev.filter(c => c.id !== id));

  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-semibold mb-6">
        Kurser
      </h2>

      {/* ADD */}

      <div className="border rounded-xl p-6 mb-10 space-y-4">

        <div className="flex gap-3 flex-wrap">

          <select
            className="border p-3 rounded"
            value={newCourse.language}
            onChange={(e) =>
              setNewCourse({
                ...newCourse,
                language: e.target.value as "en" | "da"
              })
            }
          >
            <option value="da">DA</option>
            <option value="en">EN</option>
          </select>

          <input
            type="date"
            className="border p-3 rounded"
            value={newCourse.date}
            onChange={(e) =>
              setNewCourse({
                ...newCourse,
                date: e.target.value
              })
            }
          />

          <input
            type="time"
            className="border p-3 rounded"
            value={newCourse.start_time}
            onChange={(e) =>
              setNewCourse({
                ...newCourse,
                start_time: e.target.value
              })
            }
          />

          <input
            type="time"
            className="border p-3 rounded"
            value={newCourse.end_time}
            onChange={(e) =>
              setNewCourse({
                ...newCourse,
                end_time: e.target.value
              })
            }
          />

        </div>

        {/* DAYS */}

        <div>

          <p className="text-sm mb-2">Dage</p>

          <div className="flex flex-wrap gap-2">

            {days.map(day => {

              const active = newCourse.days_of_week?.includes(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1 rounded border text-sm
                  ${active ? "bg-yellow-400 border-yellow-400" : "bg-white"}`}
                >
                  {day}
                </button>
              );

            })}

          </div>

        </div>

        {/* SESSION */}

        <div>

          <p className="text-sm mb-2">Mulighed for</p>

          <div className="flex gap-4 flex-wrap">

            {sessions.map(s => {

              const active = newCourse.session_type?.includes(s);

              return (
                <label key={s} className="flex items-center gap-2">

                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => toggleSession(s)}
                  />

                  {s}

                </label>
              );

            })}

          </div>

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

          {courses?.map(c => (

            <tr key={c.id}>

              <td className="border p-3">{c.language}</td>

              <td className="border p-3">{c.date}</td>

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

          ))}

        </tbody>

      </table>

    </div>
  );
}