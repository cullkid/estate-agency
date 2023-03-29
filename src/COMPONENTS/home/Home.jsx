import React from "react";
import Cookies from "../../REUSE COMPONENTS/cookie/Cookies";
import Feature from "../../REUSE COMPONENTS/features/Feature";
import Footer from "../../REUSE COMPONENTS/footer/Footer";
import Hero from "../../REUSE COMPONENTS/hero/Hero";
import Latest from "../../REUSE COMPONENTS/latest news/Latest";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Latest />
      <Cookies />
      <Footer />
    </div>
  );
};

export default Home;
