import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";

const HomeSup = () => {
  return (
    <div className="Contenedor-APP">
      <Header />
      <div className="grid grid-cols-3 grid-rows-4 gap-2 h-[100vh]">
        <div className=" col-span-1 m-3 ">
          <Back />
        </div>
        <div className="col-end-3 flex flex-col gap-3 justify-self-center "></div>
        <div className="col-end-3 flex flex-col gap-3 justify-self-center "></div>
        <div className="col-end-3 flex flex-col gap-3 justify-self-center "></div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSup;
