import Navbar from "../navbarComponent/navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeS";
import { useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("nav");

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px",
      backgroundColor: "var(--bg-header)",
      padding: "0px 50px",
      borderBottom: "1px solid var(--border-color)",
      boxShadow: "0 2px 8px var(--shadow)",
      transition: "background-color 0.3s ease, border-color 0.3s ease",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      {/* Brand */}
      <h2 style={{
        color: "var(--text-primary)",
        fontSize: "1.5rem",
        fontWeight: "800",
        letterSpacing: "-0.5px",
        transition: "color 0.3s ease",
      }}>
        {t("brand")}
      </h2>

      {/* Nav links */}
      <Navbar />

      {/* Theme toggle */}
      <button
        className="toggle-btn theme-btn"
        onClick={() => dispatch(toggleTheme())}
        title="Toggle Theme"
        style={{ flexShrink: 0 }}
      >
        {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
};

export default Header;
