function Perfil() {
  const nombre = "Juan Pablo";
  const apellido = "";

  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="p-1 m-3">
          <span className="py-1  text-zinc-50">{nombre}</span>
          <span className=" px- text-zinc-50">{apellido}</span>
        </div>
        <div className="p-2 m-1 flex flex-col justify-center items-center">
          <img
            className="w-[80px] h-[110px] rounded-3xl border-4 border-solid border-x-zinc-50"
            src="auth-foto.jpg"
            alt=""
          />
          <div className="py-2">
            <span>Supervisor</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
