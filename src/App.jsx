import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import useLenis from "./utils/useLenis"; // buttery scroll ❤️

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";

import ChatBubble from "./components/Chatbot/ChatBubble";
import ChatWindow from "./components/Chatbot/ChatWindow";

export default function App() {
  useLenis(); // initialize smooth scrolling 🚀

  const [darkMode, setDarkMode] = useState(true);
  const [openChat, setOpenChat] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Pass dark mode control to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <HireMe />
      <Contact />

      {/* AI Chatbot */}
      <ChatBubble onClick={() => setOpenChat(true)} />
      <ChatWindow open={openChat} onClose={() => setOpenChat(false)} />
    </ThemeProvider>
  );
}
