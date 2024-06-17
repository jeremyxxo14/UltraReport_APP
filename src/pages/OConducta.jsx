import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const OConducta = () => {
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
              <div className="Contrato-select flex flex-col   mt-2 my-2 w-72 h-10 ">
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2 ">
                  <option className="bg-slate-600  ">SUCURUSAL/CONTRATO</option>
                  <option>CALETONES</option>
                  <option>COLON</option>
                  <option>MR</option>
                </select>
              </div>

              <input
                className="flex flex-row justify-between placeholder-gray-600 items-center bg-gray-400 text-slate-200 rounded-lg w-72 h-10 px-3 mb-2 text-left"
                type="text"
                placeholder="Escribe el Nombre"
              ></input>
              <input
                className="flex flex-row justify-between placeholder-gray-600 items-center bg-gray-400 text-slate-200 rounded-lg w-72 h-10 px-3  text-left"
                type="text"
                placeholder="Actividad Observada"
              ></input>
              <div className="Contrato-select flex flex-col my-2 w-72 h-10 ">
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2  ">
                  <option className="bg-slate-600">Proce. De Trabajo</option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <input
                className="flex flex-row justify-center placeholder-gray-500 bg-gray-400 text-slate-200 rounded-lg w-72 h-10 px-3 mb-2"
                type="date"
              ></input>

              <div className="Contrato-select flex flex-col  w-72 h-10 mb-7 ">
                <label className="text-zinc-950  text-xl font-semibold relative top-2 ml-[7px] px-[5px] bg-gray-400 rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-[24px] left-[0.1px]  absolute w-32 bg-gray-400 h-2"></div>
                  A.
                </label>
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2   ">
                  <option className="bg-slate-600">
                    Planificacion del trabajo
                  </option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <div className="Contrato-select flex flex-col  w-72 h-10 mb-7">
                <label className="text-zinc-950  text-xl font-semibold relative top-2 ml-[7px] px-[5px] bg-gray-400 rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-[24px] left-[0.1px]  absolute w-32 bg-gray-400 h-2"></div>
                  B.
                </label>
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2   ">
                  <option className="bg-slate-600">
                    Planificacion del trabajo
                  </option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <div className="Contrato-select flex flex-col  w-72 h-10 mb-7 ">
                <label className="text-zinc-950  text-xl font-semibold relative top-2 ml-[7px] px-[5px] bg-gray-400 rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-[24px] left-[0.1px]  absolute w-32 bg-gray-400 h-2"></div>
                  C.
                </label>
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2   ">
                  <option className="bg-slate-600">
                    Planificacion del trabajo
                  </option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <div className="Contrato-select flex flex-col  w-72 h-10 mb-7 ">
                <label className="text-zinc-950  text-xl font-semibold relative top-2 ml-[7px] px-[5px] bg-gray-400 rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-[24px] left-[0.1px]  absolute w-32 bg-gray-400 h-2"></div>
                  D.
                </label>
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2   ">
                  <option className="bg-slate-600">
                    Planificacion del trabajo
                  </option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <div className="Contrato-select flex flex-col  w-72 h-10 mb-7 ">
                <label className="text-zinc-950  text-xl font-semibold relative top-2 ml-[7px] px-[5px] bg-gray-400 rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-[24px] left-[0.1px]  absolute w-32 bg-gray-400 h-2"></div>
                  E.
                </label>
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2   ">
                  <option className="bg-slate-600">
                    Planificacion del trabajo
                  </option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <div className="Contrato-select flex flex-col  w-72 h-10 mb-10 ">
                <label className="text-zinc-950  text-xl font-semibold relative top-2 ml-[7px] px-[5px] bg-gray-400 rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-[24px] left-[0.1px]  absolute w-32 bg-gray-400 h-2"></div>
                  F.
                </label>
                <select className="  outline-none rounded-lg bg-gray-400 h-full p-2   ">
                  <option className="bg-slate-600">
                    Planificacion del trabajo
                  </option>
                  <option>ODI-001-FABRICACION CHAPA</option>
                  <option>ODI-002-INSTALACION JUNTA</option>
                  <option>ODI-003-DIMENSIONADO </option>
                </select>
              </div>
              <div className="ContDesvi bg-gray-400 text-gray-900 rounded-lg  m-1 p-1 w-72 h-auto text-center ">
                Comentarios Positivos del Observador
                <p className="text-xs p-1 m-1 text-gray-100">
                  Enumerar todos los puntos correctos observados con sus
                  correspondientes comentarios que fundamentan la observación
                </p>
                <textarea
                  placeholder="Escribe algo aquí..."
                  className="InputDesvi rounded-lg  w-60 h-36 p-2 bg-gray-300"
                ></textarea>
              </div>
              <div className="ContDesvi bg-gray-400 rounded-lg text-gray-900 m-1 w-72 p-1 h-auto text-center ">
                Oportunidades de Mejora de Conducta
                <p className="text-xs p-1 m-1 text-gray-100">
                  Recuerde explicar en forma constructiva los desvíos respecto
                  de la práctica segura. El observado deberá entender el
                  potencial impacto (lesión, daños a los equipos, impactos
                  ambientales) si su comportamiento persiste
                </p>
                <textarea
                  placeholder="Escribe algo aquí..."
                  className="InputDesvi rounded-lg  w-60 h-36 p-2 bg-gray-300 "
                ></textarea>
              </div>
              <div className="ContDesvi bg-gray-400 rounded-lg text-gray-900 m-1 w-72 p-1 h-auto text-center ">
                Feedback/ Conclusiones / Comentarios del Observado
                <textarea
                  placeholder="Escribe algo aquí..."
                  className="InputDesvi rounded-lg  w-60 h-36 p-2 bg-gray-300"
                ></textarea>
              </div>
              <div className="ContDesvi bg-gray-400 rounded-lg text-gray-900 m-1 p-1 w-72 h-auto text-center ">
                Acciones de Control
                <p className="text-xs p-1 m-1 text-gray-100">
                  Identificar cada item cuestionable y las acciones
                  recomendadas. Las acciones deben ser prácticas, no costosas,
                  sostenibles en el tiempo y focalizadas sobre los factores que
                  tanto el empleado como el supervisor tienen contro
                </p>
                <textarea
                  className="InputDesvi rounded-lg  w-60 h-36 p-2  bg-gray-300"
                  placeholder="Escribe algo aquí..."
                ></textarea>
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

export default OConducta;
