import React from "react";
import HeroSection from "./Components/HeroSection";

const About = () => {
  const data = {
    name: "Jaydip Valand",
    image: "./images/about.jpg",
  };
  return <HeroSection {...data} />;
};

export default About;
