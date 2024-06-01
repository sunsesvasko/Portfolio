import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppLayout() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />

      <ToastContainer />
      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
