import React from "react";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Header from "../components/Header";
import ButtonBaseDemo from "../components/SupButtons";
import { Typography } from "@mui/material";

const HomeSup = () => {
  return (
    <>
      <div className="img-report absolute ml-5 flex justify-center items-center h-auto">
        <img className="" src="/logoUltraReport.png" alt="" />
      </div>
      <div className="Contenedor-APP overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-6  gap-2 max-h-screen ">
          <div className=" col-span-3 justify-self-center place-content-start h-screen  ">
            <Header />
          </div>
          <div className=" col-span-1 m-2 ">
            <Back />
          </div>
          <div className="col-span-1 justify-self-center place-content-center">
            <Typography className="z-30" variant="h3" gutterBottom>
              INICIO
            </Typography>
          </div>
          <div className=" col-span-3 row-span-2 z-50 mb-10   ">
            <ButtonBaseDemo />
          </div>
          <div className=" col-span-3 row-span-2 z-50 mb-10   "></div>
          <div className=" col-span-3 z-50 place-content-end  ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSup;
