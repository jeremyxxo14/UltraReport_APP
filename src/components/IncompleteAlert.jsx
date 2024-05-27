export default function IncompleteAlert() {
  return (
    <div className="ContIncompleteAlert flex flex-col items-center justify-center bg-black ">
      <div className="BoxIncompleteAlert flex flex-col items-center justify-center  p-3 border-2 border-solid border-stone-950 w-72  my-10 h-64 rounded-3xl ">
        <div className="IncompleteString text-center  pt-5 ">
          <p>
            Debes ingresar todos los <p1>datos</p1> solicitados correctamente.
          </p>
          <img
            src="exclamacion1.png"
            className="w-14 h-14 my-3 mx-auto  "
          ></img>
        </div>
      </div>
    </div>
  );
}
