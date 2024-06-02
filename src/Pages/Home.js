import React from "react";
import Header from "../components/Header"
import Banner from "../components/Banner";
import CardList from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
