import { Link } from "react-router-dom";

export default function HomeApr() {
  return (
    <div className="Contenedor-Home-Apr flex flex-col justify-center">
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
          to="/InformesApr"
        >
          <img src="reportes.svg" className="absolute w-32 h-36"></img>
          INFORMES
        </Link>
      </div>
    </div>
  );
}
