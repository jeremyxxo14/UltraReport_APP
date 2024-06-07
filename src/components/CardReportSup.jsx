import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardReportSup = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState([
    {
      id: "1",
      idprofil: "Alejandro Vega",
      idreport: "0001",
      activitypercent: "30%",
      timeDuration: "13:56",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
    },
    {
      id: "2",
      idprofil: "Jeremy",
      idreport: "0002",
      activitypercent: "50%",
      timeDuration: "13:56",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
    },
    {
      id: "3",
      idprofil: "cristian",
      idreport: "0003",
      activitypercent: "80%",
      timeDuration: "13:56",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
    },
    {
      id: "4",
      idprofil: "Felipe",
      idreport: "0004",
      activitypercent: "100%",
      timeDuration: "13:56",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "A.P.R",
    },
    {
      id: "5",
      idprofil: "Agustin",
      idreport: "0005",
      activitypercent: "100%",
      timeDuration: "13:56",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
    },
  ]);
  //5zqf9vqv-5173.brs.devtunnels.ms/
  https: return (
    <div>
      {card.map((card) => (
        <div
          key={card.id}
          className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-5  shadow-md hover:scale-105 hover:duration-150 duration-150"
        >
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row justify-between w-full">
              <p className="text-xm">{card.idprofil}</p>
              <p className="text-2xl">{card.idreport}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="text-2xl font-bold">{card.timeDuration}</span>

            <div className="text-xl">
              <div className="flex flex-row">{card.activitypercent}</div>
            </div>
          </div>
          <div className="text-sm">{card.desviacione}</div>
          <div className="text-sm flex justify-center">{card.Cargo}</div>
        </div>
      ))}
    </div>
  );
};

export default CardReportSup;
