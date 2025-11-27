import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import { askAI } from "../../utils/util";

const ChatWindow = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm AnkitBot, your personal AI assistant. Ask me about Ankit's projects, skills, or interests! 🚀",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Refs
  const chatBodyRef = useRef(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom
  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  // Disable page scroll while chat open (Lenis safe)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    if (inputRef.current) inputRef.current.blur(); // better UX

    const userMsg = { sender: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const data = await askAI(trimmed);

      const botMsg = {
        sender: "bot",
        text: data?.reply || "Hmm, I couldn't generate a reply right now.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again. 🙏",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`chat-window ${open ? "open" : ""}`}>
      {/* Header */}
      <div className="chat-header">
        <span>Portfolio AI Assistant</span>
        <button onClick={onClose}>✕</button>
      </div>

      {/* Body */}
      <div
        className="chat-body"
        ref={chatBodyRef}
        data-lenis-prevent // 🔥 IMPORTANT FIX FOR LENIS
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}

        {isLoading && (
          <div className="chat-message bot typing-indicator">
            AnkitBot is typing<span className="dots">...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
