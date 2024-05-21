function Header() {
  return (
    <>
      <div className="Contendor-Header flex  p-5  items-center justify-between">
        <div className="Back-Button  p-3 rounded-2xl bg-zinc-300 inline-block ">
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
        <div className="">
          <span className="  text-zinc-50">Sup.</span>
        </div>
      </div>
    </>
  );
}

export default Header;
