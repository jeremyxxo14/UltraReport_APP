function Card_report() {
  return (
    <div className="contenedor-Card flex p-2  justify-center bg-slate-600 rounded-3xl min-w-full">
      <div className="Cont-Card flex  justify-center flex-col">
        <div className="flex-row flex items-center justify-between mx-8 my-3 ">
          <label htmlFor="" className="text-3xl text-yellow-400">
            80%
          </label>
          <div className="flex flex-col justify-center items-center  ">
            <img className="w-10 " src="advertencia.png" alt="" />
            <label htmlFor="">456457</label>
          </div>
        </div>
        <div className="text-sm p-4 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
            voluptate reiciendis eligendi nesciunt et assumenda error sapiente
          </p>
        </div>
        <div className="flex justify-center">
          <label className=" p-5 " htmlFor="">
            15/09/2024
          </label>
        </div>
      </div>
    </div>
  );
}

export default Card_report;
