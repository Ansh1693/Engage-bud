import React from "react";
import BottomFlower from "../assets/BottomFlower";
import TopFlower from "../assets/TopFlower";

import Wheel from "../assets/Wheel";

import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";

const Result: React.FunctionComponent = () => {
  const { result } = React.useContext(MyContext);
  const navigate= useNavigate();
  const [coupon, setCoupon] = React.useState("XAXPDF20");
  return (
    <div className="h-screen w-screen bg-[#C6EFC8] relative">
      {/* FLowers */}
      <TopFlower />

      <BottomFlower />

      <div className="flex flex-col items-center w-full justify-center md:flex-row md:h-full lg:p-48">
        <Wheel />
        <div className="flex flex-col items-center w-full  py-20 px-16 justify-center gap-6 lg:pr-0">
          <div className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl">
            <span>Congrats! You won:</span>
          </div>
          <div className="text-4xl font-poppins font-bold text-wrap text-center lg:text-5xl">
            <span>{result}</span>
          </div>
          <div className="flex rounded-md w-full h-1/4  p-4 justify-center  text-white">
            <div className="bg-[#14141433] p-4 rounded-tl-md rounded-bl-md font-poppins font-bold text-3xl flex h-full lg:text-4xl">
              XAXPDF20
            </div>
            <div
              className="p-4 bg-[#146531] flex justify-center items-center z-10 rounded-br-md rounded-tr-md cursor-pointer font-bold text-xl lg:text-2xl"
              onClick={async () => {
                navigator.clipboard.writeText(coupon);
              }}
            >
              <span className="">COPY</span>
            </div>
          </div>
          <div
            className="bg-[#146531] rounded-full z-10 p-4 px-8 font-poppins font-bold text-xl text-white lg:text-2xl cursor-pointer"
            onClick={async() => {
              await navigator.clipboard.writeText(coupon);
              navigate('/');
            }}
          >
            Close Panel & Copy
          </div>
          <div className="z-10 flex flex-col text-xs text-[#146531] lg:text-base">
            <span>*you can claim your coupon for 10 minutes only!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
