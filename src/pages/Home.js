import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Whychoose from "../components/Whychoose";
import Howitworks from "../components/Howitworks";
import Footer from "../components/Footer";
import Horizontalbar from "../components/Horizontalbar";

function Homepage() {
  const [isTopOfPage, setisTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar isTopOfPage={isTopOfPage} />
      <Hero />
      <Aboutus />
      <Whychoose />
      <Howitworks />
      <Footer />
      <Horizontalbar />
    </div>
  );
}

export default Homepage;
