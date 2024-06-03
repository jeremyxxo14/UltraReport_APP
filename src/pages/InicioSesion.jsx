import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import RutAlert from "../components/RutAlert";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#860a0a",
    },
  },
});

import { json } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

export default function InicioSesion() {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate("");
  const color = blueGrey.A100;

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
      <div className="Contenedor-APP ">
        <Header />
        <div className="flex flex-col items-center my-5">
          <label className="flex justify-center items-center text-2xl wx-2">
            Inicio
          </label>
          <label className="text-2xl" htmlFor="">
            de Sesion
          </label>
        </div>
        <div className="Contenedor-Login flex items-center justify-center flex-col m-5 mx-5 mb-auto">
          <Formik
            initialValues={{ name: "", password: "" }}
            onSubmit={publicar}
            validate={validar}
          >
            <Form className="input flex flex-col w-fit " action="">
              <div className="input flex flex-col w-fit static">
                <label className="text-zinc-950  text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
                  <div className="my-3 left-[0.1px]  absolute w-32 bg-[#D9D9D9] h-2"></div>
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
                  <div className="my-3 left-[0.1px]  absolute w-32  bg-[#D9D9D9] h-2"></div>
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
        <Footer />
      </div>
    </>
  );
}
