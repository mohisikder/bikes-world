import React from "react";
import Products from "../Products/Products";
import About from "./About";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <hr className="container" />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
