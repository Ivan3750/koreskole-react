export const API = "http://localhost:8000";

export async function apiFetch(url: string, options: RequestInit = {}) {

  const csrf = localStorage.getItem("csrf");

  const headers: any = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (csrf) {
    headers["X-CSRF-TOKEN"] = csrf;
  }

  return fetch(API + url, {
    ...options,
    headers,
    credentials: "include"
  });

}