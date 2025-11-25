import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState({});

  // 🔥 Toggle longDescription
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        width: "100%",
        background: "linear-gradient(135deg, #42a5f5, #7e57c2)",
      }}
    >
      <Container sx={{ maxWidth: "1100px" }}>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem" },
            mb: 6,
            color: "black",
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((p) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={p._id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 450,
                  bgcolor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 4,
                  p: 2,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", mb: 1 }}
                  >
                    {p.title}
                  </Typography>

                  {/* Short Description (always fully visible) */}
                  {p.shortDescription && (
                    <Typography sx={{ mb: 1.5, color: "black" }}>
                      {p.shortDescription}
                    </Typography>
                  )}

                  {/* Long Description with SEE MORE */}
                  {p.longDescription && (
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={{ mb: 1, color: "black" }}>
                        {expanded[p._id]
                          ? p.longDescription
                          : `${p.longDescription.substring(0, 120)}...`}
                      </Typography>

                      <IconButton
                        onClick={() => toggleExpand(p._id)}
                        size="small"
                        sx={{
                          bgcolor: "blue",
                          borderRadius: "50%",
                          "&:hover": { bgcolor: "#7d3737ff" },
                        }}
                      >
                        {expanded[p._id] ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                     </IconButton>
                    </Box>
                  )}

                  {/* Tech Stack */}
                  {p.techStack && (
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {p.techStack.map((t, index) => (
                        <Box
                          key={index}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            bgcolor: "#ffffff",
                            color: "#1976d2",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                          }}
                        >
                          {t}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Repo Button */}
                  {p.repoUrl && (
                    <Button
                      variant="contained"
                      fullWidth
                      href={p.repoUrl}
                      target="_blank"
                      sx={{
                        mt: 1,
                        background: "#90caf9",
                        color: "#000",
                        // fontWeight: "bold",
                      }}
                    >
                      View Repository
                    </Button>
                  )}

                  {/* Live URL */}
                  {p.liveUrl && (
                    <Button
                      variant="outlined"
                      fullWidth
                      href={p.liveUrl}
                      target="_blank"
                      sx={{
                        mt: 1,
                        background: "#90caf9",
                        color: "#000",
                        // fontWeight: "bold",
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
