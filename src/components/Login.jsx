function Login() {
  return (
    <>
      <div className="Contenedor-Login flex items-center justify-center flex-col m-10">
        <div className="img-Login">
          <img className="w-16" src="authorization.png" alt="" />
        </div>
        <div className="input flex flex-col w-fit static">
          <label className="text-black/25  text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
            <div className="my-3 left-[0.1px]  absolute w-32 bg-[#D9D9D9] h-2"></div>
            Rut:
          </label>
          <input
            type="text"
            placeholder="......."
            className="border-zinc-950 Inputs-Login input px-[10px] py-[11px] hover:border-zinc-50 text-xs bg-[#D9D9D9] border-2 rounded-[15px] w-[210px] focus:outline-none placeholder:text-black/25"
          />
        </div>
        <div className="input flex flex-col w-fit static ">
          <label className="text-black/25  text-xs font-semibold  after:shadow-red-600 relative top-2 ml-[7px] px-[3px] bg-[#D9D9D9] rounded-[5px] w-fit border-2 border-zinc-950">
            <div className="my-3 left-[0.1px]  absolute w-32  bg-[#D9D9D9] h-2"></div>
            Contraseña:
          </label>
          <input
            type="password"
            placeholder="......."
            className="border-zinc-950 Inputs-Login input px-[10px] py-[11px] text-xs hover:border-zinc-50 bg-[#D9D9D9] border-2 rounded-[15px] w-[210px] focus:outline-none placeholder:text-black/25"
          />
        </div>
        <div>
          <button className=" button-ini p-3 my-5 rounded-full border-2 border-solid border-stone-950 text-zinc-50 borde transition-transform duration-300 transform hover:scale-110 hover:-translate-y-1  hover:bg-red-700 ">
            INGRESAR
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
