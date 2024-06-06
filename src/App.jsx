import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SpeedDialExpansion from "./navbar/SpeedDialExpansion.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Home from "./components/Home.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import logo from "./assets/logo.png";

const App = () => {
  const [val, setVal] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [islogoImageHovered, setIslogoImageHovered] = useState(false);
  

  const handleClick = () => {
    setIsClicked((prev) => {
      const newIsClicked = !prev;
      setVal(newIsClicked ? 100 : 0);
      return newIsClicked;
    });
  };

  const handleHover = () => {
    setVal(100);
  };

  const handleHoverOut = () => {
    if (!isClicked) {
      setVal(0);
    }
  };

  const logoImageHoverHandle = () => {
    setIslogoImageHovered((pre) => !islogoImageHovered);
  };
 

  return (
    <div className="relative">
      <div className="fixed top-[-1px] left-0 w-full z-20 glassy-effect">
        <div className="flex">
          <div className="flex items-center">
            <div className="flex  mt-3 space-x-2 items-center ml-6 z-40 h-[5vw] w-[12vw] min-h-10 min-w-10">
              <img
                src={logo}
                alt="logo"
                className={`animate__animated ${
                  islogoImageHovered ? "animate__headShake" : "animate__swing"
                }  h-[5vw] w-[5vw] hover:cursor-pointer rounded-full`}
                onMouseEnter={logoImageHoverHandle}
                onMouseLeave={logoImageHoverHandle}
              />
              <div
                className={`funqrew-text font-bold  w-[10vw] min-w-14 hover:cursor-pointer text-[rgba(104,35,162,1)]`}
                
              >
                {"FunQrew".split("").map((char, index) => (
                  <span key={index} className="text-[1.5vw] ">{char}</span>
                ))}
              </div>
            </div>

            <div
              className="absolute right-[2vw] hover:cursor-pointer z-30"
              onClick={handleClick}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div
                className={`icon-container ${
                  isClicked ? "icon-exit" : "icon-enter"
                }`}
              >
                {isClicked ? <CloseRoundedIcon /> : <MenuOutlinedIcon />}
              </div>
            </div>
            <Navbar val={val} />
            <SpeedDialExpansion isClicked={isClicked} />
          </div>
        </div>
      </div>

      <div className="mt-[1200px]"></div>
      <h1 className="animate__animated animate__bounce">An animated element</h1>
      <Home />
      <div className="mt-[1200px]"></div>
      <WhatWeDo />
      <div className="mt-[1200px]"></div>
      <Gallery />
      <div className="mt-[1200px]"></div>
      <AboutUs />
      <div className="mt-[1200px]"></div>
      <Contact />
      <div className="mt-[1200px]"></div>
    </div>
  );
};

export default App;
