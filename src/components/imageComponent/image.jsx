import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Image = () => {
  const [imageList] = useState([img1, img2, img3]);
  const [cursor, setCursor] = useState(0);
  const { mode } = useSelector((state) => state.themeR);

  const isDark = mode === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => (prev + 1) % imageList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  const nextImg = () => setCursor((prev) => (prev + 1) % imageList.length);
  const preImg = () => setCursor((prev) => (prev + imageList.length - 1) % imageList.length);

  return (
    <div style={{
      textAlign: "center",
      padding: "28px 20px",
      backgroundColor: isDark ? "#0f172a" : "#f8fafc",
      borderRadius: "16px",
      transition: "background-color 0.3s ease",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}>
        {/* Prev button */}
        <button
          onClick={preImg}
          style={{
            background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.3s",
          }}
        >
          <i
            className="fa-solid fa-angle-left"
            style={{
              fontSize: "22px",
              color: isDark ? "#94a3b8" : "#334155",
              transition: "color 0.3s",
            }}
          />
        </button>

        {/* Image */}
        <div style={{
          position: "relative",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: isDark
            ? "0 8px 32px rgba(0,0,0,0.5)"
            : "0 8px 24px rgba(0,0,0,0.12)",
          transition: "box-shadow 0.3s",
        }}>
          <img
            src={imageList[cursor]}
            style={{
              width: "700px",
              height: "400px",
              borderRadius: "14px",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.4s ease",
            }}
            alt="slider"
          />
          {/* Subtle dark overlay on dark mode */}
          {isDark && (
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(15, 23, 42, 0.25)",
              borderRadius: "14px",
              pointerEvents: "none",
            }} />
          )}
          {/* Dot indicators */}
          <div style={{
            position: "absolute",
            bottom: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}>
            {imageList.map((_, i) => (
              <span
                key={i}
                onClick={() => setCursor(i)}
                style={{
                  width: i === cursor ? "22px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: i === cursor ? "#ffffff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "block",
                }}
              />
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={nextImg}
          style={{
            background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.3s",
          }}
        >
          <i
            className="fa-solid fa-angle-right"
            style={{
              fontSize: "22px",
              color: isDark ? "#94a3b8" : "#334155",
              transition: "color 0.3s",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Image;
