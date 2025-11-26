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
import { fetchProjects } from "../utils/util";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
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
          sx={{ fontWeight: "bold", fontSize: "2.5rem", mb: 6, color: "black" }}
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
                  borderRadius: 4,
                  p: 2,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {p.title}
                  </Typography>

                  {p.shortDescription && (
                    <Typography sx={{ mb: 1.5 }}>
                      {p.shortDescription}
                    </Typography>
                  )}

                  {p.longDescription && (
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={{ mb: 1 }}>
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
                      {p.techStack.map((t, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            bgcolor: "#ffffff",
                            color: "#1976d2",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                          }}
                        >
                          {t}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {p.repoUrl && (
                    <Button
                      variant="contained"
                      fullWidth
                      href={p.repoUrl}
                      target="_blank"
                      sx={{ mt: 1, background: "#90caf9", color: "#000" }}
                    >
                      View Repository
                    </Button>
                  )}

                  {p.liveUrl && (
                    <Button
                      variant="outlined"
                      fullWidth
                      href={p.liveUrl}
                      target="_blank"
                      sx={{ mt: 1, background: "#90caf9", color: "#000" }}
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
