import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("nav");
  const isDark = mode === "dark";

  return (
    <footer style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "80px",
      backgroundColor: isDark ? "#020617" : "#0f172a",
      padding: "20px 50px",
      borderTop: `1px solid ${isDark ? "#1e293b" : "#1e3a5f"}`,
      transition: "background-color 0.3s, border-color 0.3s",
    }}>
      <h2 style={{ color: isDark ? "#60a5fa" : "#93c5fd", margin: 0 }}>
        {t("brand")}
      </h2>
      <h4 style={{ color: "#64748b", margin: 0, fontSize: "0.85rem" }}>
        © 2026 NewsAI. All rights reserved.
      </h4>
      <ul style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "24px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        {["Terms of Service", "Privacy Policy", "Ad Choices", "Contact Us"].map((item) => (
          <li
            key={item}
            style={{
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "500",
              color: "#94a3b8",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f1f5f9")}
            onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
          >
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
