// src/utils/util.js

const API_BASE_URL = "https://portfolio-backend-1-k7rj.onrender.com";

// const API_BASE_URL = "https://localhost:500";

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
  const {
    sessionId = localStorage.getItem("chat-session") || createSessionId(),
    includeProjects = false,
    includeCertifications = false,
    fileUrl, // optional
  } = options;

  const res = await fetch(`${API_BASE_URL}/api/ask-ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      sessionId,
      includeProjects,
      includeCertifications,
      fileUrl,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `AI request failed: ${res.status}`);
  }

  return res.json(); // { reply, projects?, certifications?, language? }
}

// ----- helper: create a session id -----
function createSessionId() {
  const id = "sess-" + Date.now() + "-" + Math.random().toString(36).slice(2);
  localStorage.setItem("chat-session", id);
  return id;
}
