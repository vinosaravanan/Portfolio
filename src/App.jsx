import React from "react";
import { Navbar } from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Technology from "./component/Technology";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import { Contact } from "./component/Contact";
import BackgroundView from "./assets/Layout/BackgroundView";

const App = () => {
  return (
    <>
      <div
        className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900 "
      >
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
     bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          ></div>
        </div>

        {/* <BackgroundView id='particles'> */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technology />
          <Projects />
          <Experience />
          <Contact />
        </div>
        {/* </BackgroundView> */}
        
      </div>

    </>
  );
};

export default App;




