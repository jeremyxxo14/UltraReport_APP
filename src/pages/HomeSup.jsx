import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import ButtonBaseDemo from "../components/SupButtons";
import { Typography } from "@mui/material";

const HomeSup = () => {
  return (
    <div className="Contenedor-APP overflow-hidden">
      <div className="img-report absolute ml-5 flex justify-center items-center ">
        <img className="" src="/logoUltraReport.png" alt="" />
      </div>
      <Header />
      <div className="grid grid-cols-3 grid-rows-3 m-1 gap-2 h-lvh ">
        <div className=" col-span-1 m-2 ">
          <Back />
        </div>
        <div className="col-span-1 justify-self-center place-content-center">
          <Typography variant="h3" gutterBottom>
            INICIO
          </Typography>
        </div>
        <div className=" col-span-3 row-span-3 z-50 mb-10  ">
          <ButtonBaseDemo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSup;
