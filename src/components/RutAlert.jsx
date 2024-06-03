export default function RutAlert() {
  return (
    <div className="ContRutAlert flex flex-col items-center justify-center  ">
      <div className="BoxRutAlert flex flex-col items-center justify-center  p-3 border-2 border-solid border-stone-950 w-72  my-10 h-40 rounded-3xl ">
        <div className="RutString text-center  pt-5 ">
          <p>LLENAR RUT</p>
          <p>Y CONTRASEÑA</p>

          <img
            src="exclamacion1.png"
            className="w-14 h-14 my-3 mx-auto  "
          ></img>
        </div>
      </div>
    </div>
  );
}
