import { useState } from "react";
import { NavLink } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Like from "../likes components/like";
import Dislike from "../likes components/dislike";

const List = ({ image, category, title, description, newsItem }) => {
  const [likesCount, setLikesCount] = useState(newsItem?.likes || 0);
  const [dislikesCount, setDislikesCount] = useState(newsItem?.dislikes || 0);
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("form");
  const isDark = mode === "dark";

  const handleLikeClick = () => {
    setLikesCount((prev) => {
      const newCount = prev + 1;
      if (newsItem?.id) {
        axios.patch(`http://localhost:4000/data/${newsItem.id}`, { likes: newCount })
          .catch(err => console.error("Error updating likes:", err));
      }
      return newCount;
    });
  };

  const handleDislikeClick = () => {
    setDislikesCount((prev) => {
      const newCount = prev + 1;
      if (newsItem?.id) {
        axios.patch(`http://localhost:4000/data/${newsItem.id}`, { dislikes: newCount })
          .catch(err => console.error("Error updating dislikes:", err));
      }
      return newCount;
    });
  };

  return (
    <div style={{
      border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
      padding: "20px",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      backgroundColor: isDark ? "#0f172a" : "#ffffff",
      transition: "background-color 0.3s, border-color 0.3s",
    }}>
      {image && (
        <img src={image} alt={title} style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }} />
      )}

      <span style={{
        display: "inline-block",
        alignSelf: "flex-start",
        backgroundColor: isDark ? "#1e3a5f" : "#ebf4ff",
        color: isDark ? "#60a5fa" : "#1e40af",
        fontWeight: 600,
        fontSize: "0.90rem",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "4px 10px",
        borderRadius: "12px",
        transition: "background-color 0.3s, color 0.3s",
      }}>
        {category}
      </span>

      <h2 style={{
        margin: 0,
        fontSize: "1.15rem",
        fontWeight: 600,
        color: isDark ? "#f1f5f9" : "#1a202c",
        lineHeight: 1.3,
        transition: "color 0.3s",
      }}>
        {title}
      </h2>

      <p style={{
        margin: 0,
        fontSize: "1rem",
        color: isDark ? "#94a3b8" : "#4a5568",
        lineHeight: 1.5,
        flex: 1,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        transition: "color 0.3s",
      }}>
        {description}
      </p>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Like isActive={likesCount > 0} onClick={handleLikeClick} />
          <span style={{
            marginRight: "20px",
            marginLeft: "-15px",
            color: isDark ? "#94a3b8" : "#4a5568",
          }}>
            {likesCount}
          </span>
          <Dislike isActive={dislikesCount > 0} onClick={handleDislikeClick} />
          <span style={{
            marginLeft: "5px",
            color: isDark ? "#94a3b8" : "#4a5568",
          }}>
            {dislikesCount}
          </span>
        </div>

        {newsItem?.id && (
          <NavLink
            to={`/show-news/${newsItem.id}`}
            style={{
              color: isDark ? "#60a5fa" : "#3182ce",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.95rem",
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: isDark ? "#1e3a5f" : "#ebf8ff",
              transition: "background-color 0.2s, color 0.3s",
            }}
          >
            {t("showMore")}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default List;
