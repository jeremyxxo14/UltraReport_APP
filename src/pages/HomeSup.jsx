import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import ButtonBaseDemo from "../components/SupButtons";

const HomeSup = () => {
  return (
    <div className="Contenedor-APP">
      <Header />
      <div className="grid grid-cols-3 grid-rows-4 m-1 gap-2 h-[72vh] ">
        <div className=" col-span-1 m-2 ">
          <Back />
        </div>
        <div className="col-span-1 justify-self-center place-content-center">
          <span className="text-2xl">Supervisor</span>
        </div>
        <div className=" col-span-3 row-span-3  ">
          <ButtonBaseDemo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSup;
