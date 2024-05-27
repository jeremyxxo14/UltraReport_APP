export default function FileAlert() {
  return (
    <div className="ContFileAlert flex flex-col items-center justify-center bg-black ">
      <div className="BoxFileAlert flex flex-col items-center justify-center  p-3 border-2 border-solid border-stone-950 w-72  my-10 h-64 rounded-3xl ">
        <div className="FileString text-center  pt-5 ">
          <p>
            El archivo seleccionado no es una <p1>imagen</p1> Por favor
            selecionna un archivo de imagen valido.
          </p>
          <img src="disquete.png" className="w-14 h-14 my-3 mx-auto  "></img>
        </div>
      </div>
    </div>
  );
}
