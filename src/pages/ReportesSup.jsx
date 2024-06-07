import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import CardReportSup from "../components/CardReportSup";

const ReportesSup = () => {
  return (
    <>
      <div className="Contenedor-APP ">
        <div className="grid grid-cols-3 grid-rows-2  gap-2 min-h-screen ">
          <div className=" col-span-3 justify-self-center place-content-start ">
            <Header />
          </div>
          <div className=" col-span-1 m-2 ">
            <Back />
          </div>

          <div className="col-span-1 justify-self-center place-content-center">
            <span className="z-30 text-4xl">REPORTES</span>
          </div>
          <div className="col-span-3  place-content-center justify-self-center mb-3 px-1">
            <CardReportSup />
          </div>

          <div className=" col-span-3 z-50 place-content-end ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportesSup;
