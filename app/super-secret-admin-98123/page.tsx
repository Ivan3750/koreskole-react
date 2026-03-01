"use client";

import { useState, useEffect } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: 0,
  });

  // ✅ перевірка сесії при старті
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await fetch("http://localhost:8000/get-courses.php", {
        credentials: "include",
      });

      if (res.status === 200) {
        const data = await res.json();
        setCourses(data);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch {
      setLoggedIn(false);
    }

    setLoading(false);
  };

  // --- логін ---
  const handleLogin = async () => {
    setError("");

    const res = await fetch("http://localhost:8000/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    if (res.status === 200) {
      setLoggedIn(true);
      fetchCourses();
    } else {
      setError("Невірний логін або пароль");
    }
  };

  // --- отримати курси ---
  const fetchCourses = async () => {
    const res = await fetch("http://localhost:8000/get-courses.php", {
      credentials: "include",
    });

    if (res.status === 401) {
      setLoggedIn(false);
      setError("Сесія протермінувалася");
      return;
    }

    const data = await res.json();
    setCourses(data);
  };

  // --- додати ---
  const addCourse = async () => {
    const res = await fetch("http://localhost:8000/add-course.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(newCourse),
    });

    if (res.status === 401) {
      setLoggedIn(false);
      return;
    }

    setNewCourse({ title: "", description: "", price: 0 });
    fetchCourses();
  };

  // --- видалити ---
  const deleteCourse = async (id: number) => {
    const res = await fetch(
      `http://localhost:8000/delete-course.php?id=${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (res.status === 401) {
      setLoggedIn(false);
      return;
    }

    fetchCourses();
  };

  // --- LOADING ---
  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  // --- LOGIN SCREEN ---
  if (!loggedIn) {
    return (
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="border p-2 mb-2 w-full"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 mb-2 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  // --- ADMIN PANEL ---
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add Course</h2>

        <input
          className="border p-2 mr-2"
          placeholder="Title"
          value={newCourse.title}
          onChange={(e) =>
            setNewCourse({ ...newCourse, title: e.target.value })
          }
        />

        <input
          className="border p-2 mr-2"
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />

        <input
          type="number"
          className="border p-2 mr-2"
          placeholder="Price"
          value={newCourse.price}
          onChange={(e) =>
            setNewCourse({ ...newCourse, price: +e.target.value })
          }
        />

        <button
          onClick={addCourse}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <table className="border w-full">
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.title}</td>
              <td className="border p-2">{c.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteCourse(c.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}