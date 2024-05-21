function Index() {
  return <div>Clientes</div>;

  <div className="flex items-center">
        <span className="ml-2">Juan Pablo Rodriguez</span>
      </div>

      <div className=" mx-20">
        <div className="  flex flex-col p-4  content-center flex-wrap ">
          <button className="bg-green-500 text-white font-bold py-2 px-4 mx-16 rounded mb-2">
            AGREGAR INFORME
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-2">
            Reportes
          </button>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
            BUSQUEDA AVANZADA DE INFORMES
          </button>
        </div>
      </div>
      <div className="bg-zinc-500 p-4">
        <h2 className="text-white font-bold text-xl text-center">
          ULTRA-REPORT
        </h2>
      </div>
}

export default Index;
