import Footer from "../components/Footer";
import Header from "../components/Header";

import { Formik, Form, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

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
  const color = blueGrey.A100;

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
              <CssTextField
                className="text-zinc-50  text-xs font-semibold  after:shadow-red-600 relative top-2 ml-[7px] px-[3px] rounded-[5px] w-fit border-2 border-zinc-950"
                required
                id="standard-required"
                label="Rut"
                defaultValue=""
                variant="standard"
              />

              <CssTextField
                required
                className=" top-3  rounded-[5px] w-fit border-2 border-zinc-950"
                id="standard-required"
                label="Contraseña"
                defaultValue=""
                variant="standard"
              />

              <ErrorMessage name="password" />

              <div className="m-10 flex flex-col justify-center items-center  ">
                <button
                  className=" button-ini p-3  rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 "
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <Footer />
      </div>
    </>
  );
}
