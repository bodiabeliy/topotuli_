"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { frState } from "@/utils/data";
import shapedText from "../../../public/shaped text.png"
import play from "../../../public/play-3-1.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { BouncedLeftArrow } from "../icons/DoubleArrowLeft";
import { BouncedRightArrow } from "../icons/DoubleArrowRight";

const WhyInduvidual = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  return (
    <>
      <div className="relative relative sm:bg-white lg:bg-green">
        <div className="WhyInduvidualWrapper relative w-full  flex justify-center flex flex-col m-auto">
        <Image
            className="absolute sm:left-0 sm:top-[35px] lg:left-[15%] lg:top-[0%] sm:scale-[.65] lg:scale-50"
            src={shapedText}
            alt={""}
          />
           <p className="sm:max-w-auto lg:w-[800px] sm:text-center lg:text-left sm:text-2xl lg:text-5xl sm:font-grotesk lg:font-monterchi uppercase z-[9999] sm:mt-[25px]  lg:mt-0 sm:ml-0 lg:ml-[150px] sm:max-w-[390px] lg:max-w-auto">
          Що отримаєте на <span className="text-white sm:ml-0 lg:ml-[40%]">групових?</span>
          </p>
          <div className="mt-5 sm:flex lg:block  lg:ml-0">
             <div className="flex flex-col m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px] sm:mt-0 lg:mt-[45px]">
                            {frState?.map((state: any) => {
                              return (
                                <>
                                      <div className="p-1">
                                        <div className={` relative p-2 flex justify-center flex-col `}>
                                          <h2 className={` text-center font-lora font-bold rounded-[25px] p-2 lg:relative sm:text-md lg:text-4xl sm:mt-0 lg:mt-4  ${state.isEvenNumber&& "text-white "}  ${!state.isEvenNumber ?"bg-yellow-lime": "sm:bg-green lg:bg-pink"} ${state.isEvenNumber ?"sm:ml-0 lg:ml-[250px]":"sm:mr-0 lg:mr-[250px]"}`}>{state.title}</h2>
                                          <Image className={`absolute sm:hidden lg:block  ${!state.isEvenNumber ?"sm:right-0 lg:right-[-150px]":"sm:left-0 lg:left-[-50px]"} sm:scale-50 lg:scale-[.3] z-[2]`} src={state.link} alt={""} />
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


export default WhyInduvidual;
