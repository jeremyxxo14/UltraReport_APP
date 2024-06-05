function Perfil() {
  const nombre = "Juan Pablo";
  const apellido = " Rodrigues";

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="p-2 m-1 flex flex-col justify-center items-center">
          <div className="col-span-1 justify-self-center place-content-center">
            <span className="text-2xl">Supervisor</span>
          </div>
          <div className="p-1 m-3">
            <span className="py-1  text-zinc-50">{nombre}</span>
            <span className=" px- text-zinc-50">{apellido}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
