import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import { storeConfig } from "./redux/store/store";
import "../i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={storeConfig}>
      <AuthProvider>
        <Toaster position="top-right" />
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
