function Logout() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="contenedorLogout flex flex-col items-center justify-center  p-3 border-2 border-solid border-stone-950 w-72  my-10 h-40 rounded-3xl ">
          <div className="logoutString text-center pt-5">
            ¿DESEAS CERRAR SESION?
          </div>

          <div className="con-buttons-logout flex flex-row  m-4">
            <button className="buttonSi mx-2 hovernat border-4 border-solid border-stone-950  w-24  h-16  rounded-full">
              SI
            </button>
            <button className="buttonNo  mx-2 hovernat border-4 border-solid border-stone-950  w-24   h-16  rounded-full">
              NO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
