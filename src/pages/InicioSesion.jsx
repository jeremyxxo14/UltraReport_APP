import Back from "../components/Back";

import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import RutAlert from "../components/RutAlert";
import { json } from "react-router-dom";

export default function InicioSesion() {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    let timer;
    if (mensajeError) {
      timer = setTimeout(() => {
        setMensajeError("");
      }, 2000); // Ocultar el mensaje después de 5 segundos
    }
    return () => clearTimeout(timer);
  }, [mensajeError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar que se haya ingresado un nombre y una fecha de cumpleaños
    if (rut.trim() === "" || password.trim() === "") {
      setMensajeError("Por favor ingresar datos correctos");
    } else {
      // Por ejemplo, podrías compararlos con los valores correctos
      const TrabajadorCorrecto = ["12345", "123"];
      const ContraseñaCorrecto = ["hola", "123"];

      if (
        TrabajadorCorrecto.includes(rut) &&
        ContraseñaCorrecto.includes(password)
      ) {
        navigate("/HomeSup"); // Call navigate here to redirect on successful login
      } else {
        setMensajeError("Los datos Ingresados Son incorrectos");
      }
    }
  };

  const publicar = (values) => {
    alert(json.stringify(values));
  };

  const validar = (values) => {
    const errors = {};
    if (values.password.length < 5)
      Error.password = "La contraseña tiene que ser mayor a 5 digitos";
    return errors;
  };
  return (
    <>
      <div className="img-report absolute ml-5 flex justify-center items-center ">
        <img className="" src="/logoUltraReport.png" alt="" />
      </div>
      <div className="Contenedor-APP grid grid-cols-3 grid-rows-5 gap-2 h-[100vh] ">
        <div className=" col-span-3 flex justify-center items-center bg-[rgba(98,98,98,0.5)]">
          <span className="Ultrareport-string1">ULTRA</span>
          <span className="Ultrareport-string1">-</span>
          <span className="Ultrareport-string2 "> REPORT</span>
        </div>

        <div className="col-span-3 justify-self-center place-content-center z-40">
          <span className="text-3xl flex justify-center items-start">
            Bienvenido
          </span>
          <br />
          <span className="text-2xl">Inicio de sesion</span>
        </div>

        <div className="col-end-3 flex flex-col gap-3 justify-self-center z-50 place-content-start">
          <div className="Contenedor-Login flex items-center  justify-center flex-col m-5 mx-5 mb-auto">
            <Formik
              initialValues={{ name: "", password: "" }}
              onSubmit={publicar}
              validate={validar}
            >
              <Form className="input flex flex-col w-fit " action="">
                <div className="input flex flex-col w-fit static">
                  <label className="text-zinc-950  text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
                    <div className="my-[13px] left-[0.1px]  absolute w-32 bg-[#D9D9D9] h-2"></div>
                    Rut:
                  </label>
                  <input
                    type="text"
                    validate=""
                    placeholder="......."
                    value={rut}
                    onChange={(event) => setRut(event.target.value)}
                    className="border-zinc-950 text-zinc-950 Inputs-Login input px-[10px] py-[15px] hover:border-zinc-50 text-sm bg-[#D9D9D9] border-2 rounded-[15px] w-[240px] focus:outline-none placeholder:text-black/25"
                  />
                </div>
                <div className="input flex flex-col w-fit static ">
                  <label className="text-zinc-950  text-xs font-semibold  after:shadow-red-600 relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
                    <div className="my-[13px] left-[0.1px]  absolute w-32  bg-[#D9D9D9] h-2"></div>
                    Contraseña:
                  </label>
                  <input
                    validate=""
                    type="password"
                    value={password}
                    placeholder="......."
                    onChange={(event) => setPassword(event.target.value)}
                    className="border-zinc-950 text-zinc-950 Inputs-Login input px-[10px] py-[15px] text-sm hover:border-zinc-50 bg-[#D9D9D9] border-2 rounded-[15px] w-[240px] focus:outline-none placeholder:text-black/25"
                  />
                </div>

                <ErrorMessage name="password" />

                <div className="m-10 flex flex-col justify-center items-center  ">
                  <button
                    className=" button-ini p-3  rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Entrar
                  </button>
                  {mensajeError && (
                    <div className="absolute top-40 my-24 ">{<RutAlert />}</div>
                  )}
                </div>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="col-span-3 justify-self-center place-content-center"></div>
        <div className="col-span-3 flex justify-center items-center bg-[rgba(98,98,98,0.5)] ">
          <span>Derechos reservados ®</span>
        </div>
      </div>
    </>
  );
}
