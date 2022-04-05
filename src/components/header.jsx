import gsap from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useLocation } from "react-router";
import { ReactComponent as UpArrowCircle } from "../assets/up-arrow-circle.svg";

const tl = gsap.timeline();
const Header = () => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  let location = useLocation();

  useEffect(() => {
    setMenuState({ menuOpened: false });
  }, [location]);

  useEffect(() => {
    if (menuState.menuOpened === true) {
      tl.to("body", { duration: 0.01, overflow: "hidden" })
        .to(".App", {
          duration: 1,
          y: window.innerWidth <= 654 ? "70vh" : window.innerHeight / 2,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          ease: "expo.inOut",
          transformOrigin: "50% 0",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-closed", {
          display: "block",
          delay: -0.8,
          duration: 0.6,
        });
    } else {
      tl.to(".App", { duration: 1, y: 0, ease: "expo.inOut" })
        .to("#circle", {
          duration: 0.6,
          ease: "expo.inOut",
          delay: -0.6,
          css: {
            strokeDashoffset: -190,
            strokeDasharray: 220,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 1,
          ease: "expo.inOut",
          transformOrigin: "50% 0",
        })
        .to(".hamburger-menu-closed", {
          display: "none",
          duration: 0,
        })
        .to("body", {
          overflow: "auto",
        });
    }
  });
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">AGENCY.</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setMenuState({ menuOpened: true })}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-closed"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrowCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
