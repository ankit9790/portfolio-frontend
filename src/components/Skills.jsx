import { Container, Typography, Box, Grid } from "@mui/material";

const skillList = [
  "Java",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "Material UI",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Visual Studio",
  "OOP",
  "DSA",
  "Repository Pattern",
  "Java JDBC",
  "REST APIs",
  "JWT Authentication",
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 5 }}
        >
          Technical Skills
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {skillList.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  background: "#1f2937",
                  color: "#fff",
                  borderRadius: "12px",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
