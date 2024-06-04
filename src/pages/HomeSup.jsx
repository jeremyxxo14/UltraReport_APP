import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import ButtonBaseDemo from "../components/SupButtons";

const HomeSup = () => {
  return (
    <div className="Contenedor-APP">
      <Header />

      <div className="grid grid-cols-2 grid-rows-3 gap-2 h-[100vh]">
        <div className=" col-span-1 m-3 ">
          <Back />
        </div>
        <div className="col col-span-1"></div>
        <div className="col-span-2  flex flex-col  justify-self-center ">
          <div className="flex flex-row ">
            <ButtonBaseDemo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSup;
