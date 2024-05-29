import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RutAlert from "../components/RutAlert";
import PassAlert from "../components/PassAlert";

export default function Login() {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [mensajeError, setMensajeError] = useState("");

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
        <RutAlert />;
      }
    }
  };

  return (
    <>
      <div className="Contenedor-Login flex items-center justify-center flex-col m-5 mx-5 mb-auto ">
        <div className="img-Login">
          <img className="w-16" src="authorization.png" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input flex flex-col w-fit static">
            <label className="text-zinc-950  text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
              <div className="my-3 left-[0.1px]  absolute w-32 bg-[#D9D9D9] h-2"></div>
              Rut:
            </label>
            <input
              type="text"
              placeholder="......."
              value={rut}
              onChange={(event) => setRut(event.target.value)}
              className="border-zinc-950 text-zinc-950 Inputs-Login input px-[10px] py-[15px] hover:border-zinc-50 text-sm bg-[#D9D9D9] border-2 rounded-[15px] w-[240px] focus:outline-none placeholder:text-black/25"
            />
          </div>
          <div className="input flex flex-col w-fit static ">
            <label className="text-zinc-950  text-xs font-semibold  after:shadow-red-600 relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
              <div className="my-3 left-[0.1px]  absolute w-32  bg-[#D9D9D9] h-2"></div>
              Contraseña:
            </label>
            <input
              type="password"
              value={password}
              placeholder="......."
              onChange={(event) => setPassword(event.target.value)}
              className="border-zinc-950 text-zinc-950 Inputs-Login input px-[10px] py-[15px] text-sm hover:border-zinc-50 bg-[#D9D9D9] border-2 rounded-[15px] w-[240px] focus:outline-none placeholder:text-black/25"
            />
          </div>
        </form>
        <div className="m-10 flex flex-col justify-center items-center  ">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" button-ini p-3  rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 "
          >
            INGRESAR
          </button>
          {mensajeError && (
            <div className="absolute top-40 my-24 ">{<RutAlert />}</div>
          )}
        </div>
      </div>
    </>
  );
}
