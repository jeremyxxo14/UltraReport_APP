import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="Contendor-Header z-50">
        <button
          onClick={handleGoBack}
          className="Back-Button  p-3 rounded-2xl border-2 border-solid border-neutral-950 bg-opacity-25 bg-zinc-300 inline-flex  "
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
        </button>
      </div>
    </>
  );
}
