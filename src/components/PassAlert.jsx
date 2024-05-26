export default function PassAlert() {
  return (
    <div className="ContPassAlert flex flex-col items-center justify-center ">
      <div className="BoxAlertPass flex flex-col items-center justify-center  p-3 border-2 border-solid border-stone-950 w-72  my-10 h-40 rounded-3xl ">
        <div className="PassString text-center pt-5 ">
          <p>
            LLENAR <p1> CONTRASEÑA</p1>
          </p>
          <p>CORRECTAMENTE </p>
          <img src="exclamacion.svg" className="w-14 h-14"></img>
        </div>
      </div>
    </div>
  );
}
