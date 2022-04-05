import gsap, { Power2, Power4 } from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import Banner from "../components/banner";
import Cases from "../components/cases";
import IntroOverlay from "../components/introOverlay";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", {
    duration: 1.8,
    y: 100,
    ease: Power4.easeOut,
    opacity: 0.3,
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.4,
    },
  })
    .to(".top .overlay-top", {
      duration: 1.6,
      height: 0,
      ease: "expo.inOut",
      stagger: {
        each: 0.4,
      },
    })
    .to(".overlay-bottom", {
      width: 0,
      duration: 1.6,
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
      ease: "expo.inOut",
    })
    .set(".intro-overlay", {
      display: "none",
    })
    .from(".case-img img", {
      duration: 1.6,
      ease: "expo.inOut",
      scale: 1.4,
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};
const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <React.Fragment>
      {!animationComplete ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </React.Fragment>
  );
};

export default Home;
