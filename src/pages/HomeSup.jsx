import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import ButtonBaseDemo from "../components/SupButtons";

const HomeSup = () => {
  return (
    <>
      <div className="Contenedor-APP ">
        <div className="grid grid-cols-3 gap-2 h-screen ">
          <div className=" col-span-3 justify-self-center place-content-start ">
            <Header />
          </div>
          <div className=" col-span-1 m-2 mt-5 ">
            <Back />
          </div>
          <div className="col-span-1 justify-self-center place-content-center">
            <span className="z-30 text-4xl">INICIO</span>
          </div>
          <div className=" col-span-3 row-span-1 z-50 mb-10 place-content-center   ">
            <ButtonBaseDemo />
          </div>
          <div className=" col-span-3 z-50 place-content-end  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSup;
