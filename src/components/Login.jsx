function Login() {
  return (
    <>
      <div className="Contenedor-Login flex items-center justify-center flex-col m-10">
        <div className="img-Login">
          <img className="w-16" src="authorization.png" alt="" />
        </div>
        <div className="Inputs-Login flex items-center justify-center flex-col m-3">
          <input
            className=" m-2 rounded-sm"
            type="text"
            placeholder="Escribe Tu Rut"
          />
          <input
            className=" m-2 rounded-sm"
            type="password"
            placeholder="Escribe la contraseña"
          />
        </div>
        <div>
          <button className=" button-ini p-3 rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 ">
            INGRESAR
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
