import { Outlet } from "react-router";
import Header from "../components/headerComponent/header";
import Footer from "../components/footerComponent/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "var(--layout-bg)",
          minHeight: "calc(100vh - 70px)",
          padding: "50px",
          transition: "background-color 0.3s ease",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
