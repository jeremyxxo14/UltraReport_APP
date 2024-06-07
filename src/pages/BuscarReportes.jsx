import React from "react";
import Buscar from "../components/Buscar";
import Header from "../components/Header";
import Back from "../components/Back";
import Footer from "../components/Footer";
import CardReportSup from "../components/CardReportSup";

const BuscarReportes = () => {
  return (
    <>
      <div className="Contenedor-APP overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-4  gap-2 max-h-screen ">
          <div className=" col-span-3 justify-self-center place-content-start ">
            <Header />
          </div>
          <div className=" col-span-1 m-2 ">
            <Back />
          </div>

          <div className="col-span-1 justify-self-center place-content-center">
            <span className="z-30 text-4xl">Busqueda Informes</span>
          </div>
          <div className="col-span-3  justify-self-center place-content-center ">
            <Buscar />
            <CardReportSup />
          </div>

          <div className=" col-span-3 z-50 place-content-end  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuscarReportes;
