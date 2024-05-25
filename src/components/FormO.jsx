export default function FormO() {
  return (
    <div className="ContFormApr flex flex-col items-center justify-center   ">
      <div className="Contrato-select flex flex-col   mt-2 my-6 w-72 h-10 ">
        <select className="  outline-none rounded-lg bg-gray-400 h-full p-3 ">
          <option disabled selected>
            SUCURUSAL/CONTRATO
          </option>
          <option>CALETONES</option>
          <option>COLON</option>
          <option>MR</option>
        </select>
      </div>
      <div className="flex flex-col my-2">
        <label className="block mr-2 text-sm font-medium">
          Nombre Observador:
        </label>
        <input
          type="text"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="block mr-2 text-sm font-medium">
          Actividad Observada:
        </label>
        <input
          type="text"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="Contrato-select flex flex-col   mt-2 my-6 w-72 h-10 ">
        <select className="  outline-none rounded-lg bg-gray-400 h-full p-3 ">
          <option disabled selected>
            Proce...de trabajo
          </option>
          <option>CALETONES</option>
          <option>COLON</option>
          <option>MR</option>
        </select>
      </div>
      <div></div>
      <div className="flex flex-col">
        <label className="block mr-2 text-sm font-medium ">Fecha:</label>
        <input
          type="date"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="block mr-2 text-sm font-medium">
          Planificacion del Trabajo
        </label>
        <input
          type="text"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="block mr-2 text-sm font-medium">
          Actividad Observada:
        </label>
        <input
          type="text"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="block mr-2 text-sm font-medium">
          Actividad Observada:
        </label>
        <input
          type="text"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
