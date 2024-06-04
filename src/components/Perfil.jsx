function Perfil() {
  const nombre = "Juan Pablo";
  const apellido = "Rodrigues";

  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <img
          className="w-[80px] h-[110px] rounded-3xl border-4 border-solid border-x-zinc-50"
          src="auth-foto.jpg"
          alt=""
        />
        <span className="py-1 px- text-zinc-50">{nombre}</span>
        <span className=" px- text-zinc-50">{apellido}</span>
      </div>
    </>
  );
}

export default Perfil;
