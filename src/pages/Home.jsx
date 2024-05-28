import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <h1 className="flex justify-center items-center text-2xl">Home</h1>
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
    </>
  );
}
