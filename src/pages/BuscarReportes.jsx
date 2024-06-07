import React from "react";
import Buscar from "../components/Buscar";
import Header from "../components/Header";
import Back from "../components/Back";
import Footer from "../components/Footer";
import CardReportSup from "../components/CardReportSup";

const BuscarReportes = () => {
  return (
    <>
      <div className="Contenedor-APP ">
        <div className="grid grid-cols-3 grid-rows-6  gap-2 max-h-screen ">
          <div className=" col-span-3 justify-self-center place-content-start h-full ">
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
            <div className="col-span-3 row-span-2">
              <CardReportSup />
            </div>
          </div>
          <div className=" col-span-3  z-50 place-content-end  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuscarReportes;
