import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <>
      <div className="App">
        <BackgroundVideo />
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
