import React from "react";
import Hospital from "./Hospital";
import Insurance from "./Insurance";
import Specialist from "./Specialist";
import Appointment from "./Appointment";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Specialist />
      <Hospital />
      <Insurance />
      
      <Appointment />
    </div>
  );
}

export default Home;
