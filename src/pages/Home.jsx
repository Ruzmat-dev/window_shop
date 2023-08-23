import React from "react";
import Swiper from "../components/Swiper";
import ItemOffers from "../components/products/ItemOffers";
import ItemAdvantages from "../components/products/ItemAdvantages";
import Header from "../components/Header";
import Calculator from "../components/Calculator"

function Home() {
  return (
    <div>
      <Header />

      <main className="mt-20 lg:mt-0 content min-h-[79vh] relative bg-gray-100    ">
        <Swiper />
        <ItemOffers />
        <ItemAdvantages />
        <Calculator/>
      </main>

    </div>
  );
}

export default Home;
