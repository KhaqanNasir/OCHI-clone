import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import Ochi from './Components/Ochi';
import About from './Components/About';
import Eye from './Components/Eye';
import Projects from './Components/Projects';
import Client from './Components/Client';
import Ready from './Components/Ready';
const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);
  return (
    <>
    <div className="div" data-scroll-container>
    <div className="div2" data-scroll data-scroll-speed={10}>
    <Navbar />
    <MainPage />
    <Ochi />
    <About  />
    <Eye />
    <Projects />
    <Client />
    <Ready />
    </div>
    </div>
    </>
  )
}

export default App
