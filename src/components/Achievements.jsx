import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCertifications } from "../utils/util";

const Achievements = () => {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCertifications()
      .then(setCerts)
      .catch(() => setError("Failed to load certifications"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Typography variant="h5" textAlign="center" sx={{ my: 10 }}>
        Loading certifications...
      </Typography>
    );

  if (error)
    return (
      <Typography variant="h5" textAlign="center" sx={{ my: 10, color: "red" }}>
        {error}
      </Typography>
    );

  return (
    <Box
      id="achievements"
      sx={{
        py: 10,
        width: "100%",
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <Container sx={{ maxWidth: "1100px" }}>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: "2.5rem", mb: 6 }}
        >
          Certifications & Achievements
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certs.map((c) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={c._id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 450,
                  bgcolor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 4,
                  transition: "0.3s",
                  p: 2,
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {c.name}
                  </Typography>

                  <Typography sx={{ mb: 2, color: "#cfd8dc" }}>
                    <strong>Issuer:</strong> {c.issuer}
                  </Typography>

                  {c.issueDate &&
                    (() => {
                      const d = new Date(c.issueDate);
                      const formatted =
                        String(d.getDate()).padStart(2, "0") +
                        "/" +
                        String(d.getMonth() + 1).padStart(2, "0") +
                        "/" +
                        d.getFullYear();
                      return (
                        <Typography sx={{ mb: 2, color: "#cfd8dc" }}>
                          <strong>Issued On:</strong> {formatted}
                        </Typography>
                      );
                    })()}

                  {c.credentialUrl && (
                    <Button
                      variant="contained"
                      fullWidth
                      href={c.credentialUrl}
                      target="_blank"
                      sx={{ mt: 1, background: "#90caf9", color: "#000" }}
                    >
                      View Certificate
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

export default Achievements;
