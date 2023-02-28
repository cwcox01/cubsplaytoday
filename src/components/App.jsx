import React from "react";
import Navbar from "./Navbar";
import Mlb from "./Mlb";
import TrippleAAA from "./TrippleAAA";
import DoubleAA from "./DoubleAA";
import AdvA from "./AdvA";
import LowA from "./LowA";
import Prospects from "./Prospects";
import Footer from "./Footer";

function App() {
  return (
    <div className="site-container">
      <Navbar />
      <Mlb />
      <TrippleAAA />
      <DoubleAA />
      <AdvA />
      <LowA />
      <Prospects />
      <Footer />
    </div>
  );
}

export default App;
