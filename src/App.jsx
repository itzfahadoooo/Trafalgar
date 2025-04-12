import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Apps from "./Components/Apps";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />

      <Hero id="home" />
      <Services id="services" />

      <Apps id="apps" />
      <Testimonials id="testimonials" />
      <AboutUs id="about" />
      <Footer />
    </div>
  );
};

export default App;
