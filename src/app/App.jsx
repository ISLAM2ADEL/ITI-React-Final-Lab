import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddNews from "../pages/AddNews";
import ShowNews from "../pages/ShowNews";
import DetailedNew from "../pages/DetailedNew";

// Syncs Redux theme + language state to <html> attributes
function ThemeWrapper({ children }) {
  const { mode } = useSelector((state) => state.themeR);
  const { lang } = useSelector((state) => state.languageR);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return children;
}

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/signIn" replace /> },
    { path: "/signIn", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/add-news", element: <AddNews /> },
        { path: "/show-news", element: <ShowNews /> },
        { path: "/show-news/:id", element: <DetailedNew /> },
      ],
    },
  ]);

  return (
    <ThemeWrapper>
      <RouterProvider router={router} />
    </ThemeWrapper>
  );
}

export default App;
