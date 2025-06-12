"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { ActionButton } from "../buttons/ActionButton";
const LanguageBanner = ({bannerImage, occupation, navLink}:any) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (link:string) => {
   router.push(`${pathname}#${link}`);
  
  }


  return (
    <>
      <div className="bannerContent sm:ml-5 lg:ml-0 sm:ml-4 extra-loose  lg:w-full z-10 sm:mb-[120px] lg:mb-0">
        <div className="bannerTitle pl-0 sm:max-w-auto lg:max-w-[50%]">
         <div className="sm:mt-16 lg:mt-0">
           <p className="sm:text-center font-grotesk lg:text-left sm:text-2xl lg:text-5xl uppercase z-[9999] sm:mt-5 lg:mt-0">
            Завітай на наші  <span className="font-bold uppercase text-mainYellow"> {occupation}</span> заняття та переконайся сам!
          </p>
         </div>
        


        </div>
        
        <div className="actionBtnWrapper lg:w-[40%] sm:mt-[83%] sm:pb-[75px] lg:pb-0 lg:mt-20 sm:mb-0 sm:mb-0 lg:mb-10 flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between">
        <ActionButton
            disabled={false}
            className={
              "relative actionBtn sm:hidden lg:block  font-grotesk sm:mt-[75px] lg:mt-0 rounded-[25px] border-white border-2 lg:font-semibold  sm:text-2xl lg:text-2xl p-5 sm:w-[90%] lg:w-[300px] sm:h-auto lg:h-[80px] bg-green hover:bg-green-light  focus:bg-green-light text-white shadow-[0px_6px_1px_0px_pink]"
            }
            text={"Дізнатись деталі"}
            onClick={() =>navigateTo(navLink)}
          />
        </div>
      </div>
      <div className="sm:hidden lg:block tutorImage lg:absolute lg:right-[-28%] lg:top-[-77%] lg:scale-[.4]">
        <Image src={bannerImage} alt={"Inna Bielashenok"} />
      </div>
      <Image
        className={`sm:block lg:hidden absolute sm:flex lg:block justify-center sm:w-full lg:w-auto sm:right-[0px] lg:top-[0%] lg:right-[0%] m-auto w-[90%] ${occupation=="індивідуальні"?"sm:top-[162px]":"sm:top-[161px] "} sm:scale-100`}
        src={bannerImage}
        alt=""
      />
    </>
  );
};

export default LanguageBanner;
