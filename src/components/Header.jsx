import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="Contendor-Header flex  p-5  items-center justify-between">
        <Link
          to={"/"}
          className="Back-Button  p-3 rounded-3xl border-2 border-solid border-neutral-950 bg-zinc-300 inline-block  "
        >
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
        </Link>
        <div className="flex flex-col ">
          <span className="  text-zinc-50">Sup.</span>
          <span className="  text-zinc-50">A.R.P </span>
          <span className="  text-zinc-50">O.B.S</span>
        </div>
      </div>
    </>
  );
}

export default Header;
