import { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const initialState = {
  title: "",
  descreption: "",
  imageUrl: "",
  category: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Input = ({ onAddNews }) => {
  const [inputData, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation("form");
  const { mode } = useSelector((state) => state.themeR);

  const isDark = mode === "dark";

  const styles = {
    container: {
      backgroundColor: isDark ? "#1e293b" : "#ffffff",
      padding: "24px",
      borderRadius: "14px",
      width: "340px",
      boxShadow: isDark
        ? "0 0 20px rgba(0,0,0,0.4)"
        : "0 0 20px rgba(0,0,0,0.08)",
      border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
      transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    h2: {
      textAlign: "center",
      color: isDark ? "#f1f5f9" : "#0f172a",
      fontSize: "1.4rem",
      fontWeight: 700,
      marginBottom: "6px",
      transition: "color 0.3s",
    },
    label: {
      fontSize: "0.95rem",
      fontWeight: "600",
      color: isDark ? "#94a3b8" : "#475569",
      transition: "color 0.3s",
    },
    input: {
      height: "38px",
      padding: "0 12px",
      border: `1.5px solid ${isDark ? "#334155" : "#cbd5e1"}`,
      borderRadius: "8px",
      backgroundColor: isDark ? "#0f172a" : "#f8fafc",
      color: isDark ? "#f1f5f9" : "#1e293b",
      fontSize: "0.9rem",
      outline: "none",
      transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
    },
    textArea: {
      height: "90px",
      width: "100%",
      resize: "none",
      padding: "10px 12px",
      border: `1.5px solid ${isDark ? "#334155" : "#cbd5e1"}`,
      borderRadius: "8px",
      backgroundColor: isDark ? "#0f172a" : "#f8fafc",
      color: isDark ? "#f1f5f9" : "#1e293b",
      fontSize: "0.9rem",
      fontFamily: "inherit",
      outline: "none",
      boxSizing: "border-box",
      transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
    },
    select: {
      fontSize: "0.9rem",
      padding: "8px 12px",
      border: `1.5px solid ${isDark ? "#334155" : "#cbd5e1"}`,
      borderRadius: "8px",
      backgroundColor: isDark ? "#0f172a" : "#f8fafc",
      color: isDark ? "#f1f5f9" : "#1e293b",
      outline: "none",
      transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
    },
    button: {
      borderRadius: "10px",
      padding: "11px",
      border: "none",
      cursor: "pointer",
      background: isDark
        ? "linear-gradient(135deg, #3b82f6, #6366f1)"
        : "linear-gradient(135deg, #475569, #334155)",
      color: "white",
      fontSize: "1rem",
      fontWeight: "600",
      marginTop: "4px",
      transition: "opacity 0.2s, transform 0.1s",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "update", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddNews) {
      onAddNews(inputData);
    }
    dispatch({ type: "reset" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>{t("addNewsTitle")}</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>{t("titleLabel")}</label>
        <input
          style={styles.input}
          type="text"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          placeholder={t("titlePlaceholder")}
        />

        <label style={styles.label}>{t("descriptionLabel")}</label>
        <textarea
          style={styles.textArea}
          name="descreption"
          value={inputData.descreption}
          onChange={handleChange}
          placeholder={t("descriptionPlaceholder")}
        />

        <label style={styles.label}>{t("imageUrlLabel")}</label>
        <input
          style={styles.input}
          type="text"
          name="imageUrl"
          value={inputData.imageUrl}
          onChange={handleChange}
          placeholder={t("imageUrlPlaceholder")}
        />

        <label style={styles.label}>{t("categoryLabel")}</label>
        <select
          style={styles.select}
          name="category"
          value={inputData.category}
          onChange={handleChange}
        >
          <option value="" disabled>{t("chooseCategory")}</option>
          <option value="AI">AI</option>
          <option value="Mobile">Mobile</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
        </select>

        <button style={styles.button} type="submit">
          {t("addNewsBtn")}
        </button>
      </form>
    </div>
  );
};

export default Input;
