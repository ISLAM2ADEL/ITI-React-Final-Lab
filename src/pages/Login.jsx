import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../redux/slices/languageS";
import { toggleTheme } from "../redux/slices/themeS";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.languageR);
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("form");

  const handleSignIn = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:4000/users?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length > 0) {
          login(res.data[0]);
          toast.success("Login successful!");
          navigate("/home");
        } else {
          toast.error("Invalid email or password");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        toast.error("Error logging in");
      });
  };

  return (
    <div className="auth-container">
      {/* Logo */}
      <div className="auth-header">
        <h2>NewsAI</h2>
      </div>

      {/* Top-right controls: Language + Theme */}
      <div className="auth-top-controls">
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleLanguage())}
          title="Switch Language"
        >
          🌐 {lang === "en" ? "عربي" : "English"}
        </button>
        <button
          className="toggle-btn theme-btn"
          onClick={() => dispatch(toggleTheme())}
          title="Toggle Theme"
        >
          {mode === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Card */}
      <div className="auth-card">
        <h3>{t("signIn")}</h3>
        <p className="auth-subtitle">{t("subtitle")}</p>

        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label>{t("emailLabel")}</label>
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>{t("passwordLabel")}</label>
            <div className="password-input">
              <input
                type="password"
                placeholder={t("passwordPlaceholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="primary-btn">{t("signInBtn")}</button>
        </form>

        <p className="auth-footer-text">
          {t("noAccount")}{" "}
          <NavLink to="/register" className="link">{t("registerLink")}</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
