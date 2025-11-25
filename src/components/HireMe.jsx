const HireMe = () => {
  return (
    <section
      id="hireme"
      style={{
        width: "100%",
        padding: "80px 0",
        backgroundColor: "#0d1117",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "2.4rem",
          marginBottom: "20px",
        }}
      >
        Why Should You Hire Me?
      </h2>

      {/* Sub text */}
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px",
          fontSize: "1.2rem",
          color: "#cfd8dc",
        }}
      >
        Click the preview box below to watch my introduction video.
      </p>

      {/* ⭐ Full Width Preview Box (Same as Contact Section Width) */}
      <a
        href="https://drive.google.com/file/d/1nLSsyLbIvDiciPgbaqePVWyhnh3XdBz3/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            width: "90%", // ⭐ same width as Contact content
            maxWidth: "900px", // ⭐ SAME EXACT WIDTH AS CONTACT
            height: "400px", // ⭐ big rectangle preview
            backgroundColor: "#1f2937",
            margin: "0 auto",
            borderRadius: "16px",
            border: "2px solid #374151",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#90caf9",
            fontSize: "2rem",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          ▶ Click to Watch Video
        </div>
      </a>
    </section>
  );
};

export default HireMe;
