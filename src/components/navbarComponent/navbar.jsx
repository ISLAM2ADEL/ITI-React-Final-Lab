import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../redux/slices/languageS";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.languageR);
  const { t } = useTranslation("nav");

  const linkStyle = {
    textDecoration: "none",
    listStyle: "none",
    fontSize: "1rem",
    fontWeight: "600",
    color: "var(--text-secondary)",
    padding: "6px 4px",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Nav links */}
      <ul style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        <NavLink
          to="/home"
          style={linkStyle}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/add-news"
          style={linkStyle}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {t("addNews")}
        </NavLink>
        <NavLink
          to="/show-news"
          style={linkStyle}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {t("showNews")}
        </NavLink>
      </ul>

      {/* Language toggle */}
      <button
        className="toggle-btn"
        onClick={() => dispatch(toggleLanguage())}
        title="Switch Language"
      >
        🌐 {lang === "en" ? "عربي" : "English"}
      </button>
    </div>
  );
};

export default Navbar;
