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
    },
    {
      id: "2",
      idprofil: "Jeremy",
      idreport: "0002",
      activitypercent: "30%",
    },
    {
      id: "3",
      idprofil: "cristian",
      idreport: "0003",
      activitypercent: "30%",
    },
  ]);

  return (
    <div className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
      <div key={card.id} className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-between w-full">
          <CardReport idprofile={card.idprofil} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <h3 className="text-xl font-bold">Great Experience!</h3>
          <div className="text-xs">
            <div className="flex flex-row">{/* Tus íconos van aquí */}</div>
          </div>
        </div>
        <div className="text-sm">Loracinia odi</div>
      </div>
    </div>
  );
};

export default CardReportSup;
