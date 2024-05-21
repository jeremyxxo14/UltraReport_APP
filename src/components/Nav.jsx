function Nav() {
  return (
    <div className="NavBotonesSup flex flex-col justify-center  ">
      <div className="Contenedor-botonessup flex flex-col items-center my-10">
        <button className="AddButtonSup p-3 border-2 border-solid border-stone-950 w-80  my-10 h-36 rounded-full ">
          AGREGAR REPORTE
        </button>

        <button className="RepButtonSup p-3 border-2 border-solid border-stone-950 w-80 my-5 h-36 rounded-full">
          <svg className="absolute"></svg>
          REPORTES
        </button>

        <button className="BusqReportSup  p-3 border-2 border-solid border-stone-950 w-80 my-5  h-36 rounded-full ">
          <svg className="absolute"> </svg>
          BUSQUEDA AVANZADA DE REPORTES
        </button>
      </div>
    </div>
  );
}

export default Nav;
