import { Container, Typography, Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:ankity9790@gmail.com";
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=ankity9790@gmail.com",
      "_blank"
    );
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #42a5f5, #7e57c2)",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Contact Me
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <EmailIcon />
            <Link href="#" onClick={handleEmailClick}>
              ankity9790@gmail.com
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <PhoneIcon />
            <Link href="tel:+919755771590">+91 9755771590</Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <GitHubIcon />
            <Link href="https://github.com/ankit9790" target="_blank">
              github.com/ankit9790
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <LinkedInIcon />
            <Link
              href="https://www.linkedin.com/in/ankit-yadav-a2a875276/"
              target="_blank"
            >
              linkedin.com/in/ankit-yadav
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
