import { useSelector } from "react-redux";
import Image from "../components/imageComponent/image";

const Home = () => {
  const { mode } = useSelector((state) => state.themeR);
  const isDark = mode === "dark";

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <Image />
      <h2 style={{
        marginTop: "32px",
        fontSize: "2rem",
        fontWeight: 700,
        color: isDark ? "#f1f5f9" : "#0f172a",
        transition: "color 0.3s",
      }}>
        Welcome to NewsAI
      </h2>
      <p style={{
        marginTop: "12px",
        fontSize: "1.05rem",
        color: isDark ? "#94a3b8" : "#475569",
        transition: "color 0.3s",
      }}>
        Select "Add News" to submit a new article or "Show News" to view the latest updates.
      </p>
    </div>
  );
};

export default Home;
