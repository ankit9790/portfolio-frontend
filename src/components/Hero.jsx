import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        backgroundColor: "#111826",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
            transition: "0.3s",
            "&:hover": {
              color: "#90caf9",
              cursor: "pointer",
            },
          }}
          gutterBottom
        >
          Ankit Yadav
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#cfd8dc",
            mb: 2,
            fontWeight: "500",
          }}
        >
          Full Stack Developer | JavaScript | React.js | Node.js | Express
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#cfd8dc" }}
          maxWidth="600px"
          mx="auto"
        >
          Passionate about building modern, responsive, and dynamic web
          applications with clean UI and efficient backend systems.
        </Typography>

        <Button
          href="#projects"
          variant="contained"
          color="primary"
          sx={{ mt: 4, px: 4, py: 1.2 }}
        >
          View My Work
        </Button>
      </motion.div>
    </Box>
  );
};

export default Hero;
