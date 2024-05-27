export default function DuplicatedAlert() {
  return (
    <div className="ContDuplicatedAlert flex flex-col items-center justify-center bg-black ">
      <div className="BoxDuplicatedAlert flex flex-col items-center justify-center  p-3 border-2 border-solid border-stone-950  w-72  my-10 h-64 rounded-3xl ">
        <div className="DuplicatedString text-center  pt-5 ">
          <p>
            Reporte <p1>DUPLICADO</p1>
          </p>
          <p>Debes crear un nuevo reporte</p>
          <img src="duplicated.png" className="w-14 h-14 my-3 mx-auto  "></img>
        </div>
      </div>
    </div>
  );
}
