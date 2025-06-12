"use client";
import Image from "next/image";
import { DropDownButton } from "../buttons/DropDownButton";
import FigureMobile from "@/../public/figure1.png";
import Flags from "@/../public/🇬🇧🇫🇷.png";
import mainBanner from "@/../public/logo2.svg";

import { useCallback, useEffect, useState } from "react";
import Modal from "../Modal/Modal";

import EngFrFlags from "../../../public/engfr.png";
import { ActionButton } from "../buttons/ActionButton";

const Banner = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);


  const OpenDropDown = useCallback(() => {
    setIsDropDownOpen(!isDropDownOpen);
  }, [isDropDownOpen]);

  const CloseDropDown = useCallback(() => {
    setIsDropDownOpen(false);
  }, [isDropDownOpen]);

  const navigateTo = (link:string) => {
    const url = link;
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <>
      {/* <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} /> */}
      <div className="bannerContent lg:ml-0 sm:mt-10 lg:mt-5 lg:ml-[45px] extra-loose  lg:w-full z-10">
        <div className="bannerContent sm:text-xl lg:text-4xl sm:mb-4 lg:mb-9 sm:pl-[5px] lg:pl-0"></div>
       <div className="sm:hidden lg:block">
         <div className="bannerTitle pl-0">
          <p className="sm:text-center lg:text-left sm:text-2xl lg:text-5xl text-white font-grotesk  z-[9999]">
          <span className="text-mainYellow">"Веселі топотулі"</span> - початок успіху <br />для вашої дитини!
          </p>
          
        </div>
        <div className="bannerContent font-lora font-bold lg:relative sm:text-xl lg:text-3xl sm:mt-4 lg:mt-9 sm:pl-[115px] lg:pl-0 ">
          <p className="text-mainYellow ">
           Тупаємо і граємося - весело навчаємося!
          </p>
        </div>
       </div>

        <div className="relative sm:block lg:hidden mt-[130%]">
         <div className="bannerTitle pl-0">
          <p className="sm:text-center lg:text-left sm:text-2xl lg:text-5xl text-white font-grotesk  z-[9999]">
          <span className="text-mainYellow">"Веселі топотулі"</span> - початок успіху для вашої дитини!
          </p>
          
        </div>
        <div className="bannerContent font-lora font-bold lg:relative sm:text-xl lg:text-3xl sm:mt-4 lg:mt-9 sm:pl-[5px] lg:pl-0 ">
          <p className="text-mainYellow">
           {/* Тупаємо і граємося - весело навчаємося! */}
          </p>
        </div>
       </div>
       
       
        <div className="actionBtnWrapper lg:w-[40%] sm:mt-[15%] sm:pb-[75px] lg:pb-0 lg:mt-20 sm:mb-0 sm:mb-0 lg:mb-10 flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between">
        <ActionButton
            disabled={false}
            className={
              " relative actionBtn sm:m-auto sm:p-auto lg:p-0 sm:mb-4 lg:mb-0  font-grotesk rounded-[25px] border-green border-2 lg:font-semibold  sm:text-2xl lg:text-2xl p-5 sm:w-[90%] lg:w-[250px] sm:h-auto lg:h-[80px] bg-white hover:bg-green-light text-green hover:text-white"
            }
            text={"Записатись на заняття"}
            onClick={() =>navigateTo("/#form")}
          />
          <DropDownButton
            type="button"
            disabled={false}
            onClick={() => {
              OpenDropDown();
            }}
            closeDropDown={CloseDropDown}
            isDropDownOpen={isDropDownOpen}
            className={
              " relative actionBtn sm:m-auto lg:p-0 font-grotesk rounded-[25px] border-white border-2 lg:font-semibold  sm:text-2xl lg:text-2xl p-5 sm:w-[90%] lg:w-[250px] sm:h-auto lg:h-[80px] bg-green hover:bg-yellow-lime text-white hover:text-black focus:shadow-[0px_6px_1px_0px_green]"
            }
            text={"Дізнатись більше"}
          />
        </div>
      </div>
      <div className="sm:hidden lg:block tutorImage lg:absolute lg:right-[-6%] lg:top-[0%] sm:scale-50 lg:scale-[75%] ">
        <Image src={mainBanner} alt={"Topotuli"} />
      </div>
      <Image
        className=" mobileTutorImage sm:block lg:hidden absolute sm:flex lg:block justify-center sm:w-full lg:w-auto sm:right-[0%] sm:top-[3%] lg:top-[0%] lg:right-[0%] m-auto w-[90%] rounded-[10%] mt-[15px]"
        src={mainBanner}
        alt=""
      />
      
    </>
  );
};

export default Banner;
