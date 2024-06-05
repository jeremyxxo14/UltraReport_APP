function Perfil() {
  const nombre = "Juan";
  const apellido = " Rodrigues";

  return (
    <>
      <div className="">
        <div className="p-1 flex flex-row justify-between ">
          <div className="img-report w-32 h-36 ">
            <img className="relative" src="/logoUltraReport.png" alt="" />
          </div>
          <div className=" flex flex-col justify-center m-10">
            <div className="">
              <span className="text-2xl">Supervisor</span>
            </div>
            <div className="p-1 ">
              <span className=" text-zinc-50">{nombre}</span>
              <span className=" text-zinc-50">{apellido}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
