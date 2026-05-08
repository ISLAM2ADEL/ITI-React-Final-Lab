import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SearchComponent = ({ searchTerm, onSearchChange }) => {
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("form");
  const isDark = mode === "dark";

  return (
    <div style={{ marginBottom: "20px", width: "100%" }}>
      <input
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "10px",
          border: `1.5px solid ${isDark ? "#334155" : "#e2e8f0"}`,
          fontSize: "0.95rem",
          backgroundColor: isDark ? "#1e293b" : "#ffffff",
          color: isDark ? "#f1f5f9" : "#1e293b",
          outline: "none",
          boxSizing: "border-box",
          transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
        }}
        type="text"
        placeholder={t("searchPlaceholder")}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
