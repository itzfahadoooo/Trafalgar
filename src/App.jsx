import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Apps from "./Components/Apps";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Apps/>
    </div>
  );
};

export default App;
