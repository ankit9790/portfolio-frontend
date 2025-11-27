// src/utils/util.js

const API_BASE_URL = "https://portfolio-backend-1-k7rj.onrender.com";

// ----- helper: create a session id -----
function createSessionId() {
  const existing = localStorage.getItem("chat-session");
  if (existing) return existing;
  const id = "sess-" + Date.now() + "-" + Math.random().toString(36).slice(2);
  localStorage.setItem("chat-session", id);
  return id;
}

// ----- Projects -----
export async function fetchProjects() {
  const res = await fetch(`${API_BASE_URL}/api/projects`);
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status}`);
  }
  return res.json();
}

// ----- Certifications (Achievements) -----
export async function fetchCertifications() {
  const res = await fetch(`${API_BASE_URL}/api/certifications`);
  if (!res.ok) {
    throw new Error(`Failed to fetch certifications: ${res.status}`);
  }
  return res.json();
}

// ----- Chat / AI -----
export async function askAI(message, options = {}) {
  const sessionId = options.sessionId || createSessionId();

  // By default: always allow backend to read projects & certs
  const includeProjects =
    options.includeProjects !== undefined ? options.includeProjects : true;
  const includeCertifications =
    options.includeCertifications !== undefined
      ? options.includeCertifications
      : true;

  const body = {
    message,
    sessionId,
    includeProjects,
    includeCertifications,
  };

  if (options.fileUrl) {
    body.fileUrl = options.fileUrl;
  }

  const res = await fetch(`${API_BASE_URL}/api/ask-ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("askAI error response:", err);
    throw new Error(err.error || `AI request failed: ${res.status}`);
  }

  const data = await res.json();
  // data => { reply, projects?, certifications?, language? }
  return data;
}

// ----- Optional: explicit mode setter (if you want buttons later) -----
export async function setChatMode(mode) {
  const sessionId = createSessionId();
  const res = await fetch(`${API_BASE_URL}/api/mode/set`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, mode }), // "developer", "designer", "mentor"
  });
  if (!res.ok) {
    throw new Error(`Failed to set mode: ${res.status}`);
  }
  return res.json();
}

// Optional: save user name explicitly (if you want a form/button later)
export async function rememberUserName(name) {
  const sessionId = createSessionId();
  const res = await fetch(`${API_BASE_URL}/api/memory`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, key: "name", value: name }),
  });
  if (!res.ok) {
    throw new Error(`Failed to save name: ${res.status}`);
  }
  return res.json();
}
