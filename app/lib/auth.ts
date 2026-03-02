export const API = "http://localhost:8000";

export async function checkAuth() {
  return fetch(`${API}/check-auth.php`, {
    credentials: "include"
  });
}

export async function loginRequest(name: string, password: string) {
  return fetch(`${API}/login.php`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });
}

export async function logoutRequest() {
  return fetch(`${API}/logout.php`, {
    credentials: "include"
  });
}