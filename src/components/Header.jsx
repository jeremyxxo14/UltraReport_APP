function Header() {
  return (
    <>
      <div className="Contendor-Header flex ">
        <div className="Back-Button mx-5 p-3 rounded-2xl bg-zinc-300 block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </div>
        <div className="right-0 mx-1 px-10">
          <span className="absolute right-0 text-zinc-50">Sup.</span>
        </div>
        <div className="flex justify-center items-center max-w-100 max-h-100 ">
          <img className="w-12" src="authorization.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
