import { Container, Typography, Paper, Box } from "@mui/material";

const About = () => (
  <Box
    id="about"
    sx={{
      py: 10,
      background: "linear-gradient(135deg, #42a5f5, #7e57c2)",
    }}
  >
    <Container disableGutters>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 4, md: 8 },
          borderRadius: 3,
          background: "transparent",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "black",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          maxWidth="900px"
          mx="auto"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: 1.6,
            color: "black",
          }}
        >
          A Full Stack Developer passionate about building scalable,
          user-centric web applications. Skilled in React, TypeScript, Node.js,
          Express, PostgreSQL, MongoDB and Java, with a strong ability to
          convert Figma designs into responsive, modern interfaces. Hand on
          practice in creating secure REST APIs with JWT authentication and
          applying OOP, DSA, DBMS, and Repository Patterns to deliver clean,
          maintainable, and production-ready code.
        </Typography>
      </Paper>
    </Container>
  </Box>
);

export default About;
