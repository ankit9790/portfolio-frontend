import React, { useState } from "react";
import "./chatbot.css";

const ChatWindow = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm personal AI assistant. Ask me about his projects, skills, or interests!",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Call backend API or OpenAI directly
    try {
      const res = await fetch("http://localhost:5000/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          sessionId: localStorage.getItem("chat-session"),
        }),
      });

      const data = await res.json();

      const botMsg = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Try again!" },
      ]);
    }

    setInput("");
  };

  return (
    <div className={`chat-window ${open ? "open" : ""}`}>
      <div className="chat-header">
        <span>Portfolio AI Assistant</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
