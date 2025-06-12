"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cardsList } from "@/utils/data";
import shapedText from "../../../public/shaped text.png"
import Puzzle from "../../../public/puzzle.png"

import play from "../../../public/play-3-1.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { BouncedLeftArrow } from "../icons/DoubleArrowLeft";
import { BouncedRightArrow } from "../icons/DoubleArrowRight";

const EfficiancyStatements = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  return (
    <>
      <div id="approach" className="relative sm:h-full lg:h-full sm:bg-white lg:bg-green">
              <Image className="absolute sm:top-[31%] lg:top-[0%] sm:right-[57%] lg:right-[3%] sm:scale-75 lg:scale-100" src={Puzzle} alt={""} />

        <div className="EfficiancyStatementsWrapper relative w-full sm:mt-0 lg:mt-12 flex justify-center flex flex-col m-auto">
        <Image
            className="absolute sm:left-0 sm:top-[1%] lg:left-[-7%] lg:top-[0%] sm:scale-[.65] lg:scale-50"
            src={shapedText}
            alt={""}
          />
          <p className="sm:max-w-auto lg:w-[800px] sm:text-black lg:text-white sm:text-center lg:text-left sm:text-2xl lg:text-5xl font-grotesk uppercase z-[9999] sm:ml-0 lg:ml-[150px]">
          Чому мої Заняття є <span className="text-white">ефективні?</span> 
          </p>
          <div className="sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block  lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px] ">
                {cardsList?.map((card: any) => {
                  return (
                    <>
                      <div className="rounded-[20px]  z-10 p-1 w-full w-[330px] sm:mb-8 lg:mb-0 m-auto ">
                        <div className="rounded-[20px] flex flex-col justify-center w-[330px] relative">
                          <div className="p-3">
                            <div className={`p-2 rounded-[25px] h-[330px] border-2 border-white ${!card.isEvenNumber? "shadow-[0px_10px_20px_rgba(0,_0,_0,_0.6),_0_10px_20px_pink]":"shadow-[0px_10px_20px_rgba(0,_0,_0,_0.6),_0_10px_20px_green]"} flex justify-center flex-col  ${card.isEvenNumber ?"bg-yellow-lime": "bg-green"}`}>
                              <h2 className={`text-center font-lora font-bold lg:relative sm:text-3xl lg:text-4xl sm:mt-0 lg:mt-4  ${!card.isEvenNumber&& "text-white"}`}>{card.title}</h2>
                              <Image className="m-auto" src={card.link} alt={card.title} width={isMobile?100:150}/>
                              <p className={`text-center sm:text-[20px] lg:text-[22px]  ${!card.isEvenNumber&& "text-white"}`}>{card.description}</p>

                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default EfficiancyStatements;
