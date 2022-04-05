
import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./pages/about";
import Approach from "./pages/approach";
import CaseStudies from "./pages/caseStudies";
import Home from "./pages/home";
import Service from "./pages/services";

import "./styles/App.scss";

//pages

const routes = [
  {
    path: '/', name: 'Home', Component: Home
  },
  {
    path: '/case-studies', name: 'Case Studies', Component: CaseStudies
  },
  {
    path: '/approach', name: 'Approach', Component: Approach
  },
  {
    path: '/services', name: 'Services', Component: Service
  },
  {
    path: '/about-us', name: 'About Us', Component: About
  },
];

function debounce(fn, ms) {
  let timer;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(
      () => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
  }
}
function App() {

  useEffect(() => {
    const resize = () => {

      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    let deboundHandleResize = debounce(resize, 1000);
    window.addEventListener("resize", deboundHandleResize);

    return () => {
      window.removeEventListener('resize', deboundHandleResize);
    }
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} element={<Component />}></Route>
            ))
          }
        </Routes>

      </div>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
