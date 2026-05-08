import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import List from "../listComponent/list";
import SearchComponent from "../searchComponent/search";

const Card = ({ refresh }) => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { mode } = useSelector((state) => state.themeR);
  const isDark = mode === "dark";

  useEffect(() => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        let filteredData = res.data;
        if (searchTerm) {
          filteredData = res.data.filter(
            (n) =>
              n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              n.category.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }
        setNewsData(filteredData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [refresh, searchTerm]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
      <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div style={{
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: isDark
          ? "0 0 20px rgba(0,0,0,0.4)"
          : "0 0 10px rgba(0,0,0,0.08)",
        border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "15px",
        transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s",
      }}>
        {newsData.map((n, index) => (
          <List
            key={index}
            newsItem={n}
            image={n.image}
            title={n.title}
            description={n.description}
            category={n.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
