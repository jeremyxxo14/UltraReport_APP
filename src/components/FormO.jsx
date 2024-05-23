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
      <a className="CharlaButton flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left">
        CHARLA SEGURIDAD
        <img src="camara.svg" className=" w-6 h-7"></img>
      </a>

      <a className="InputCamara-Charla flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
        VACIO
        <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
      </a>

      <a className="Checklist-Button flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left">
        CHECKLIST <img src="camara.svg" className=" w-6 h-7"></img>
      </a>

      <a className="InputCamara-Checklist flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
        VACIO
        <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
      </a>

      <a className="Ast-Button flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left">
        AST <img src="camara.svg" className=" w-6 h-7"></img>
      </a>

      <a className="InputCamara-Ast flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
        VACIO
        <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
      </a>
      <div className="ContDesvi bg-gray-400 rounded-lg  m-1 w-72 h-auto text-center ">
        DESVIACIONES
        <textarea className="InputDesvi rounded-lg  w-60 h-36 "></textarea>
      </div>
      <a className="EnviarButton-Apr p-3 my-3 rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 ">
        ENVIAR INFORME
      </a>
    </div>
  );
}
