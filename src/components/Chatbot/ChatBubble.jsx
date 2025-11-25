import React from "react";
import "./chatbot.css";
import ChatIcon from "@mui/icons-material/Chat";

const ChatBubble = ({ onClick }) => {
  return (
    <div className="chat-bubble" onClick={onClick}>
      <ChatIcon style={{ color: "white" }} />
    </div>
  );
};

export default ChatBubble;
