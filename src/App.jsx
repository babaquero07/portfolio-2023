import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <footer>
        <p className="text-center">
          © Adapted from{" "}
          <a
            className="blue-text-gradient"
            href="https://www.youtube.com/@javascriptmastery"
            rel="noreferrer"
            target="_blank"
          >
            JavaScript Mastery
          </a>
          . All rights reserved.
        </p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
