function Nav() {
  return (
    <div className="NavBotonesSup flex flex-col justify-center  ">
      <div className="Contenedor-botonessup flex flex-col items-center my-10">
        <button
          className="AddButtonSup  p-3 border-2 border-solid border-stone-950 w-80  my-10 h-36 rounded-full 
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
        >
          <img src="addreportlogo.svg" className="absolute w-32 h-36"></img>
          AGREGAR REPORTE
        </button>

        <button
          className="RepButtonSup Fontnativo p-3 border-2 border-solid border-stone-950 w-80 my-5 h-36 rounded-full
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
        >
          <img src="reportes.svg" className="absolute w-32 h-36"></img>
          REPORTES
        </button>

        <button className="BusqReportSup p   -3 border-2 border-solid border-stone-950 w-80 my-5  h-36 rounded-full  hovernat flex items-center justify-center ">
          <img src="lupa.svg" className="a   bsolute w-32 h-36"></img>
          BUSQUEDA AVANZADA
        </button>
      </div>

      <div className="Contenedor-Buttons-Apr  flex flex-col items-center justify-center ">
        <button
          className="AddButtonApr p-3 border-2 border-solid border-stone-950 w-80  my-10 h-36 rounded-full 
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center "
        >
          <img src="addreportlogo.svg" className="absolute w-32 h-36"></img>
          AGREGAR INFORME
        </button>
        <button
          className="BusqButtonApr p-3 border-2 border-solid border-stone-950 w-80  my-10 h-36 rounded-full 
        transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center "
        >
          <img src="reportes.svg" className="absolute w-32 h-36"></img>
          INFORMES
        </button>
      </div>
    </div>
  );
}

export default Nav;
