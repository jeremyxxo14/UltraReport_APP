export default function FormSup() {
  return (
    <div className="ContFormApr flex flex-col items-center justify-center">
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
        <input
          type="text"
          placeholder="Descripcion Técnica"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <a className="DotButton flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left">
        DOTACION ACTIVIDAD
        <img src="camara.svg" className=" w-6 h-7"></img>
      </a>

      <a className="InputCamara-Charla flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
        VACIO
        <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
      </a>

      <div className="flex flex-col my-2">
        <input
          type="text"
          placeholder="Lugar Especifico"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col my-2">
        <input
          type="text"
          placeholder="Duracion de Actividad"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col my-2">
        <input
          type="text"
          placeholder="Desviaciones"
          className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <select className="  outline-none rounded-lg bg-gray-400 h-full p-3 ">
        <option disabled selected>
          AVANCE DE LA ACTIVIDAD
        </option>
        <option>10%</option>
        <option>20%</option>
        <option>30%</option>
        <option>40%</option>
        <option>50%</option>
        <option>60%</option>
        <option>70%</option>
        <option>80%</option>
        <option>90%</option>
        <option>100%</option>
      </select>

      <div className="fotoSelect flex items-center">
        <img src="ejemplo.jpeg" alt="" className="ejemplo1 w-36 h-48" />
        <img src="ejemplo.jpeg" alt="" className="ejemplo2 w-36 h-48 " />
        <img src="ejemplo.jpeg" alt="" className="ejemplo3 w-36 h-48 " />
      </div>
    </div>
  );
}
