import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function InicioSesion() {
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
        <Login />
        <Footer />
      </div>
    </>
  );
}
