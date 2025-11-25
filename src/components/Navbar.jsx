import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        py: 1,
        backgroundColor: "#111826 !important",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "1px",
          }}
        >
          Ankit Yadav
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((text) => (
            <Button
              key={text}
              href={`#${text.toLowerCase()}`}
              sx={{
                color: "#e5e7eb",
                fontWeight: 500,
                "&:hover": { color: "#60a5fa" },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
