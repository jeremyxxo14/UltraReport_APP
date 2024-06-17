import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Toaster, toast } from "sonner";

const FormularioSup = () => {
  return (
    <>
      <div className="Contenedor-APP ">
        <div className="grid grid-cols-3  gap-2 min-h-screen ">
          <div className=" col-span-3 row-span-full">
            <Header />
          </div>
          <div className=" col-span-1 m-2 ">
            <Back />
          </div>
          <div className="col-span-1 justify-self-center place-content-center my-10">
            <span className="z-40 flex flex-col justify-center items-center text-4xl">
              LLenar <span className="flex items-center">Formulario</span>
            </span>
          </div>
          <div className=" col-span-3 row-span-3 z-50   ">
            <div className="Contenedor-FormularioApr flex flex-col gap-1 items-center justify-center   ">
              <div className="Contrato-select flex flex-col   mt-2 my-6 w-72 h-10 ">
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2 ">
                  <option className="bg-slate-600">SUCURUSAL/CONTRATO</option>
                  <option>CALETONES</option>
                  <option>COLON</option>
                  <option>MR</option>
                </select>
              </div>

              <Link
                className="CharlaButton flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left"
                to="/Camara"
              >
                CHARLA SEGURIDAD
                <img src="camara.svg" className=" w-6 h-7"></img>
              </Link>

              <a className="InputCamara-Charla flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
                VACIO
                <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
              </a>

              <Link
                className="Checklist-Button flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left"
                to="/InicioSesion"
              >
                CHECKLIST <img src="camara.svg" className=" w-6 h-7"></img>
              </Link>

              <a className="InputCamara-Checklist flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
                VACIO
                <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
              </a>

              <Link
                className="Ast-Button flex flex-row justify-between items-center bg-gray-400  rounded-lg w-72 h-10 px-3 text-left"
                to="/camera"
              >
                AST <img src="camara.svg" className=" w-6 h-7"></img>
              </Link>

              <a className="InputCamara-Ast flex flex-row justify-between items-center bg-gray-400 rounded-lg my-3 w-72 h-10 px-3 ">
                VACIO
                <img src="archivo-vacio.svg" className=" w-6 h-7"></img>
              </a>

              <div className="ContDesvi bg-gray-400 rounded-lg  m-1 w-72 h-auto text-center ">
                DESVIACIONES
                <textarea className="InputDesvi rounded-lg  w-60 h-36 "></textarea>
              </div>
              <Link
                className="EnviarButton-Apr p-3 my-3 rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 "
                to="/HomeSup"
              >
                ENVIAR INFORME
              </Link>
              <Toaster />
            </div>
          </div>
          <div className=" col-span-3 h-full "></div>
          <div className="col-span-3 justify-items-center place-content-end z-50 ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioSup;
