import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import BackToTopButton from "./components/BackToTopButton";

function AppLayout() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const showAfter = 300; // Adjust this value as needed
    setShowButton(scrollTop > showAfter);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />

      <ToastContainer />
      <Outlet />
      <BackToTopButton show={showButton} />

      <Footer />
    </div>
  );
}

export default AppLayout;
