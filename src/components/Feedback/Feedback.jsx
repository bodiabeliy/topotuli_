"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { speakersList, reelsList } from "@/utils/data";
import Heart from "../../../public/heart.png"
import play from "../../../public/play-3-1.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { BouncedLeftArrow } from "../icons/DoubleArrowLeft";
import { BouncedRightArrow } from "../icons/DoubleArrowRight";

const SpeakersAndSponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  const ClientSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 2 : 1,
    slidesToScroll: 1,
  };
  const SponsorSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: isMobile?2:1,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="FeedbackWrapper relative sm:h-full  lg:h-full bg-green sm:overflow-x-hidden lg:overflow-x-hidden sm:mt-4 lg:mt-12 sm:mb-4 lg:mb-6">

        <div id="clients" className="SpeakersWrapper w-full flex justify-center flex flex-col m-auto">
          <Image className="absolute sm:left-[40%] lg:left-[12%] sm:top-[20%]  lg:top-[-11%] z-10 sm:scale-50 lg:scale-[.17]" src={Heart} alt={""} />
            <p className="sm:max-w-auto lg:w-[800px] text-white sm:text-center lg:text-left sm:text-2xl lg:text-5xl font-grotesk uppercase z-[9999] sm:ml-0 lg:ml-[150px]">
                Відгуки батьків:
          </p>
          <div className=" mt-5 sm:flex lg:block sm:ml-[15px] lg:ml-0 sm:mr-[15px] lg:mr-0">
            <div className="SpeakersCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px]">
              <Slider className="flex justify-center" {...ClientSettings}>
                {speakersList?.map((clientCard) => {
                  return (
                    <>
                      <div className=" rounded-[20px] bg-pink z-10 p-1 w-full max-w-[400px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px] bg-white flex flex-col justify-center max-w-[400x]">
                          <div className="p-3 flex flex-col justify-center">
                            <p className="text-center sm:text-[30px] font-bold lg:text-[45px]">
                              {clientCard?.name}
                            </p>
                            <p className="text-center text-[25px]">
                              {clientCard?.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <div className="animatedSliderButtons sm:flex lg:hidden text-white justify-center animate-shake z-[9999]">
                <BouncedLeftArrow className="mt-[11%] mr-[6%]" fill="white"/>
                 <span className=" text-2xl mt-[3.5%] text-center animate-shake animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both"> Перегорніть карусель <br /> вліво або вправо</span>
                <BouncedRightArrow className="items-center	mt-[11%] ml-[6%]" fill="white" />
              </div>

            </div>
          </div>
        </div> 
        <div id="reels" className="SponsorsWrapper relative bg-green w-full flex justify-center flex flex-col sm:mt-[160px] lg:mt-[100px] m-auto">
          <p className="sm:max-w-auto lg:w-[800px] text-white sm:text-center lg:text-left sm:text-2xl lg:text-5xl font-grotesk uppercase z-[9999] sm:ml-0 lg:ml-[150px]">
          Добірка наших занять
          </p>
          <div className="sm:max-h-[500px] lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block  lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px] ">
              {/* <Slider className="flex justify-center" {...SponsorSettings}> */}
                {reelsList?.map((reel) => {
                  return (
                    <>
                      <div className="rounded-[20px]  z-10 p-1 w-full max-w-[300px] sm:mb-8 lg:mb-0 m-auto ">
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[300px] relative">
                          <div className="p-3">
                            <div className="rellsOverlay">
                            <Image className="reelsPreview" src={reel.author} alt=""></Image>
                            <Image className="absolute top-[12%] scale-50" src={play} alt=""></Image>

                            </div>
                            <Link className={"absolute top-0 left-0 right-0 bottom-0 p-[82px]"} href={reel.link}></Link>
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


export default SpeakersAndSponsors;
