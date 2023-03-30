import React from "react";
import BottomFlower from "../assets/BottomFlower";
import TopFlower from "../assets/TopFlower";
import Result from "./Result";
import Wheel ,{list}from "./Wheel";
import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";

const WheelPage = () => {
    const{result,setResult}=React.useContext(MyContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        const wheel = document.getElementById("wheel");
        const button = document.getElementById("onSpin");
    
        let value: number = Math.ceil(Math.random() * 6000);
        const handleClick = () => {
          wheel!.classList.add("transition-wheel");
          let value2: number = value % 60;
          value += 7200 + (60 - value2);
          wheel!.style.transform = `rotate(${value}deg)`;
          value2 = ((360 - value%360) / 60) + 1;
          if(value2===7) value2=1;
            setResult(list[value2-1].name);  
        };
    
        button?.addEventListener("click", () => {
          handleClick();
        });
    
        wheel?.addEventListener("transitionend", () => {
          wheel.classList.remove("transition-wheel");
          const actualDeg: number = value % 360;
          wheel!.style.transform = `rotate(${actualDeg}deg)`;

          navigate('/result')
        });
        
      }, []);
  return (
    <div className="h-screen w-screen bg-[#C6EFC8]">
      <TopFlower />
      <BottomFlower />
      <div className="h-full w-full flex justify-center items-center">
        {/* <Result name="Hello"/> */}
        <Wheel />
      </div>
    </div>
  );
};

export default WheelPage;
