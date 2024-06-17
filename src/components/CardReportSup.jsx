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
      descpTec: "Revision Alfa",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
      date: "15/05/24",
    },
    {
      id: "2",
      idprofil: "Jeremy",
      idreport: "0002",
      activitypercent: "50%",
      descpTec: "Revision Alfa",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
      date: "15/05/24",
    },
    {
      id: "3",
      idprofil: "cristian",
      idreport: "0003",
      activitypercent: "80%",
      descpTec: "Revision Alfa",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
      date: "15/05/24",
    },
    {
      id: "4",
      idprofil: "Felipe",
      idreport: "0004",
      activitypercent: "100%",
      descpTec: "Revision Alfa",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "A.P.R",
      date: "15/05/24",
    },
    {
      id: "5",
      idprofil: "Agustin",
      idreport: "0005",
      activitypercent: "100%",
      descpTec: "Revision Alfa",
      desviacione:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibuseros.",
      Cargo: "Supervisor",
      date: "15/05/24",
    },
  ]);

  return (
    <div>
      {card.map((card) => (
        <div
          key={card.id}
          className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-5 shadow-md hover:scale-105 hover:duration-150 duration-150 border-b-2 border-white"
        >
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row justify-between w-full">
              <p className="text-xm">{card.idprofil}</p>
              <p className="text-2xl">{card.idreport}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="text-2xl font-bold">{card.descpTec}</span>

            <div className="text-xl">
              <div className="flex flex-row">{card.activitypercent}</div>
            </div>
          </div>
          <div className="text-sm">{card.desviacione}</div>
          <div className="text-sm flex justify-center">{card.Cargo}</div>
          <div className="text-sm flex justify-end">{card.date}</div>
        </div>
      ))}
    </div>
  );
};
export default CardReportSup;
