import React from "react";
import Home from "./components/Home";
import Ellipse from "./components/Ellipse";
import Work from "./components/Work";
import Why from "./components/Why";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center">
      <Home />
      <Ellipse />
      <Work />
      <Why />
      <About />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
