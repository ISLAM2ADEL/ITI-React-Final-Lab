import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";

const DetailedNew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("form");
  const isDark = mode === "dark";

  useEffect(() => {
    axios.get(`http://localhost:4000/data/${id}`)
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching detailed news:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div style={{ textAlign: "center", padding: "40px", color: isDark ? "#94a3b8" : "#475569" }}>
      Loading...
    </div>
  );
  if (!news) return (
    <div style={{ textAlign: "center", padding: "40px", color: isDark ? "#94a3b8" : "#475569" }}>
      News not found.
    </div>
  );

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    }}>
      <button
        style={{
          alignSelf: "flex-start",
          marginLeft: "15%",
          marginBottom: "20px",
          padding: "10px 18px",
          backgroundColor: isDark ? "#1e293b" : "#e2e8f0",
          color: isDark ? "#f1f5f9" : "#1e293b",
          border: `1px solid ${isDark ? "#334155" : "#cbd5e1"}`,
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "0.9rem",
          transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
        }}
        onClick={() => navigate("/show-news")}
      >
        {t("backToNews")}
      </button>

      <div style={{
        width: "70%",
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        padding: "30px",
        borderRadius: "14px",
        boxShadow: isDark
          ? "0 4px 20px rgba(0,0,0,0.4)"
          : "0 4px 12px rgba(0,0,0,0.08)",
        border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
        transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s",
      }}>
        {news.image && (
          <img src={news.image} alt={news.title} style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
          }} />
        )}

        <span style={{
          display: "inline-block",
          backgroundColor: isDark ? "#1e3a5f" : "#ebf4ff",
          color: isDark ? "#60a5fa" : "#1e40af",
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "uppercase",
          padding: "6px 12px",
          borderRadius: "12px",
          marginBottom: "15px",
          transition: "background-color 0.3s, color 0.3s",
        }}>
          {news.category}
        </span>

        <h1 style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          color: isDark ? "#f1f5f9" : "#1a202c",
          marginBottom: "15px",
          lineHeight: 1.3,
          transition: "color 0.3s",
        }}>
          {news.title}
        </h1>

        <div style={{
          display: "flex",
          fontSize: "1.1rem",
          color: isDark ? "#64748b" : "#4a5568",
          marginBottom: "20px",
          transition: "color 0.3s",
        }}>
          <span>👍 {news.likes || 0}</span>
          <span style={{ marginLeft: "15px" }}>👎 {news.dislikes || 0}</span>
        </div>

        <div style={{
          fontSize: "1.1rem",
          color: isDark ? "#cbd5e1" : "#2d3748",
          lineHeight: 1.9,
          transition: "color 0.3s",
        }}>
          <p>{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedNew;
