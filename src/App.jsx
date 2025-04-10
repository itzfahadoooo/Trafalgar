import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Apps from "./Components/Apps";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Apps/>
      <Footer/>
    </div>
  );
};

export default App;
