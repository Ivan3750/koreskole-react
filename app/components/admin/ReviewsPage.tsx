"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL } from "@/app/lib/api";

type Review = {
  id: number;
  first_name: string;
  last_name: string;
  review_text: string;
  review_date: string;
  rating: number;
};

const EMPTY_REVIEW: Review = {
  id: 0,
  first_name: "",
  last_name: "",
  review_text: "",
  review_date: "",
  rating: 5,
};

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange?: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const interactive = !!onChange;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          style={{
            background: "none",
            border: "none",
            cursor: interactive ? "pointer" : "default",
            padding: "0 2px",
            fontSize: "1.4rem",
            color:
              (hovered || value) >= star
                ? "var(--color-primary)"
                : "var(--color-border)",
            transition: "color 0.15s",
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ReviewsPage({ onLogout }: { onLogout: () => void }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [csrf, setCsrf] = useState("");
  const [newReview, setNewReview] = useState<Review>(EMPTY_REVIEW);
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
      setCsrf(data.csrf ?? "");
      await fetchReviews();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`${BASE_URL}/reviews.php`, {
        credentials: "include",
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      const data = await res.json();
      setReviews(data.reviews ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const addReview = async () => {
    setError("");

    if (
      !newReview.first_name ||
      !newReview.last_name ||
      !newReview.review_text ||
      !newReview.review_date
    ) {
      setError("Udfyld venligst alle felter.");
      return;
    }

    if (!csrf) {
      setError("CSRF token mangler. Genindlæs siden.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        first_name: newReview.first_name,
        last_name: newReview.last_name,
        review_text: newReview.review_text,
        review_date: newReview.review_date,
        rating: newReview.rating,
      };

      const res = await fetch(`${BASE_URL}/reviews.php`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json();

      if (res.status === 401) {
        onLogout();
        return;
      }

      if (!res.ok) {
        setError(responseData.error || "Kunne ikke tilføje anmeldelse.");
        return;
      }

      await fetchReviews();
      setNewReview(EMPTY_REVIEW);
    } catch (err) {
      console.error(err);
      setError("Serverfejl - prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (id: number) => {
    if (!confirm("Er du sikker på at du vil slette?")) return;

    try {
      const res = await fetch(`${BASE_URL}/reviews.php?id=${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: { "X-CSRF-TOKEN": csrf },
      });

      if (res.status === 401) {
        onLogout();
        return;
      }

      if (res.ok) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputStyle = {
    backgroundColor: "var(--color-input-bg)",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
  };

  return (
    <div
      className="max-w-6xl mx-auto px-6 py-12"
      style={{
        backgroundColor: "var(--color-bg-layout)",
        color: "var(--color-text)",
      }}
    >
      <h2 className="text-3xl font-semibold mb-8">Anmeldelser</h2>

      <div
        className="p-8 rounded-2xl space-y-6 mb-12"
        style={{
          backgroundColor: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">Fornavn</label>
            <input
              type="text"
              className="p-3 rounded w-full"
              style={inputStyle}
              value={newReview.first_name}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, first_name: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Efternavn</label>
            <input
              type="text"
              className="p-3 rounded w-full"
              style={inputStyle}
              value={newReview.last_name}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, last_name: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">Dato</label>
            <input
              type="date"
              className="p-3 rounded w-full"
              style={inputStyle}
              value={newReview.review_date}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, review_date: e.target.value }))
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Bedømmelse</label>
            <div className="p-2">
              <StarRating
                value={newReview.rating}
                onChange={(v) =>
                  setNewReview((prev) => ({ ...prev, rating: v }))
                }
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">Anmeldelse</label>
          <textarea
            className="p-3 rounded w-full min-h-[140px]"
            style={inputStyle}
            value={newReview.review_text}
            onChange={(e) =>
              setNewReview((prev) => ({ ...prev, review_text: e.target.value }))
            }
          />
        </div>

        {error && (
          <p className="text-sm" style={{ color: "var(--color-danger)" }}>
            {error}
          </p>
        )}

        <button
          onClick={addReview}
          disabled={loading}
          className="px-6 py-3 rounded-xl font-semibold transition"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#111111",
          }}
        >
          {loading ? "Gemmer..." : "Tilføj anmeldelse"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          className="w-full rounded-xl overflow-hidden"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-elevated)",
          }}
        >
          <thead>
            <tr
              className="text-left"
              style={{ backgroundColor: "var(--color-table-head)" }}
            >
              <th className="p-3">Navn</th>
              <th className="p-3">Dato</th>
              <th className="p-3">Bedømmelse</th>
              <th className="p-3">Anmeldelse</th>
              <th className="p-3">Handling</th>
            </tr>
          </thead>

          <tbody>
            {reviews.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center">
                  Ingen anmeldelser fundet
                </td>
              </tr>
            ) : (
              reviews.map((r) => (
                <tr
                  key={r.id}
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <td className="p-3">
                    {r.first_name} {r.last_name}
                  </td>
                  <td className="p-3">{r.review_date}</td>
                  <td className="p-3">
                    <StarRating value={r.rating ?? 0} />
                  </td>
                  <td className="p-3 whitespace-pre-wrap">{r.review_text}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteReview(r.id)}
                      className="text-white px-3 py-1 rounded transition"
                      style={{ backgroundColor: "var(--color-danger)" }}
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