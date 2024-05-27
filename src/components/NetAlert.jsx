export default function NetAlert() {
  return (
    <div className="ContNetAlert flex flex-col items-center justify-center bg-black ">
      <div className="BoxNetAlert flex flex-col items-center justify-center bg-black  p-3 border-2 border-solid border-stone-950 w-72  my-10 h-64 rounded-3xl ">
        <div className="NetString text-center  pt-5 ">
          <p>
            Error de <p1>conexión.</p1>
          </p>
          <p>
            Por favor, verifica tu conexión a internet o intenta nuevamente{" "}
          </p>
          <img src="network.png" className="w-14 h-14 my-3 mx-auto  "></img>
        </div>
      </div>
    </div>
  );
}
