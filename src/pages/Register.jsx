import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../redux/slices/languageS";
import { toggleTheme } from "../redux/slices/themeS";
import { useTranslation } from "react-i18next";
import "./auth.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.languageR);
  const { mode } = useSelector((state) => state.themeR);
  const { t } = useTranslation("form");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const newUser = { fullName, email, password };

    axios.post("http://localhost:4000/users", newUser)
      .then(() => {
        toast.success("Registration successful");
        navigate("/signIn");
      })
      .catch((err) => {
        console.error("Registration error:", err);
        toast.error("Failed to register");
      });
  };

  return (
    <div className="auth-container">
      {/* Logo */}
      <div className="auth-header">
        <h2 className="logo-with-icon">NewsAI</h2>
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
        <h3>{t("createAccount")}</h3>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder={t("fullNamePlaceholder")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder={t("emailPlaceholderReg")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="password-input">
              <input
                type="password"
                placeholder={t("passwordPlaceholderReg")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="password-input">
              <input
                type="password"
                placeholder={t("confirmPasswordPlaceholder")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="primary-btn blue-btn">{t("createBtn")}</button>
        </form>

        <p className="auth-footer-text">
          {t("haveAccount")}{" "}
          <NavLink to="/signIn" className="link">{t("loginLink")}</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
