import React from "react";
import { animateScroll as scroll } from "react-scroll";

const BackToTopButton = ({ show }) => {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        className="fixed bottom-5 right-5 p-2 bg-gray-400 rounded-full"
        onClick={handleScrollToTop}
      >
        <img src="./totop.png" alt="To Top Button" className="w-[48px]" />
      </button>
    )
  );
};

export default BackToTopButton;
