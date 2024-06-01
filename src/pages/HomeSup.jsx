import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Perfil from "../components/Perfil";
import Back from "../components/Back";

const HomeSup = () => {
  return (
    <div className="Contenedor-APP">
      <Back />
      <Perfil />
      <div className="Contenedor-botonessup flex flex-col items-center my-5">
        <Link
          className="AddButtonSup my-5 p-3 border-2 border-solid border-stone-950 w-80 h-36 rounded-full 
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          to="/InicioSesion"
        >
          <img src="addreportlogo.svg" className="absolute w-32 h-36"></img>
          AGREGAR REPORTE
        </Link>
        <Link
          className="RepButtonSup Fontnativo p-3 border-2 border-solid border-stone-950 w-80 my-5 h-36 rounded-full
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          to="/InicioSesion"
        >
          <img src="reportes.svg" className="absolute w-32 h-36"></img>
          AGREGAR REPORTE
        </Link>
        <Link
          className=" BusqReportSup RepButtonSup Fontnativo p-3 border-2 border-solid border-stone-950 w-80 my-5 h-36 rounded-full
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          to="/InicioSesion"
        >
          <img src="lupa.svg" className="absolute   bsolute w-32 h-36"></img>
          BUSQUEDA AVANZADA
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSup;
