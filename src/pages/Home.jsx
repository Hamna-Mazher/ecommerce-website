import React from "react";
import HeroSection from "../components/HeroSection";
import BrowseRange from "../components/BrowseRange";
import OurProducts from "../components/OurProducts";
import InspirationSection from "../components/InspirationSection";
import SetupSection from "../components/SetupSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <BrowseRange />
      <OurProducts />
      <InspirationSection />
      <SetupSection />
      <Footer />
    </>
  );
}

export default Home;
