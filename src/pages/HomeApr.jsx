import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Perfil from "../components/Perfil";

export default function HomeApr() {
  return (
    <>
      <div className="Contenedor-APP  ">
        <Header />
        <Perfil />
        <div className="Contenedor-Buttons-Apr  flex flex-col items-center justify-center ">
          <Link
            className="AddButtonApr p-3 border-2 border-solid border-stone-950 w-80  my-10 h-36 rounded-full 
    transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center "
            to="/FormularioApr"
          >
            <img src="addreportlogo.svg" className="absolute w-32 h-36"></img>
            AGREGAR INFORME
          </Link>
          <Link
            className="BusqButtonApr p-3 border-2 border-solid border-stone-950 w-80  my-10 h-36 rounded-full 
    transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center "
          >
            <img src="reportes.svg" className="absolute w-32 h-36"></img>
            INFORMES
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
