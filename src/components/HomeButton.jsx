import React, { useEffect, useState } from 'react'
import { IoArrowUpSharp } from "react-icons/io5";

const HomeButton = ({smoothScroll}) => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
  { showButton && (<div onClick={() => (smoothScroll('Home'))} className={`text-3xl sm:text-xl bg-gray-600 p-2 sm:p-[0.4rem] animate-updown fixed bottom-6 left-6 sm:left-[50%] text-white rounded-full z-50`}>
       <IoArrowUpSharp />
    </div>)}
    </div>
  );
};

export default HomeButton