import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import BackgroundVideo from "./components/BackgroundVideo";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="App">
        <BackgroundVideo />
        <Header />

        <Skills />

        <Projects />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
