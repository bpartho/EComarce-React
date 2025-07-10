import React from "react";
import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Trending />
      <ProductList />
    </div>
  );
};

export default HomePage;
