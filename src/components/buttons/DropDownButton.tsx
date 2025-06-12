import { BtnDropDownProps } from "@/types";
import Image from "next/image";
import eng from "@/../public/eng.webp"
import frn from "@/../public/frn.webp"
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";

export const DropDownButton = (props:BtnDropDownProps) => {
  const { onClick, closeDropDown, disabled, isDropDownOpen, type, sendData, selectedValue } = props;
  const langOptionsBoxRef = useRef<HTMLDivElement | null>(null);
  const langEngRef = useRef<HTMLDivElement | null>(null);
  const langFRRef = useRef<HTMLDivElement | null>(null);

  const [selectedLanguge, setSelectedLanguage] = useState<string>(selectedValue || "")

  useEffect(() => {
    setSelectedLanguage(selectedValue || "");
  }, [selectedValue]);

  useEffect(() => {
    window.addEventListener("mousedown", clickOutSideHandler);
  }, []);

  const clickOutSideHandler =(event:any) => {
    if (
      langOptionsBoxRef.current &&
      !langOptionsBoxRef.current?.contains(event.target)
    ) {
      closeDropDown()
    }
  }
  const selectEngLanguage = useCallback(() => {
    if (langEngRef.current) { 
      if (typeof(sendData)=="function") {
        sendData(langEngRef.current?.innerText)
      }     
     setSelectedLanguage(langEngRef.current?.innerText)
     closeDropDown()
     
    }
  },[selectedLanguge])

  const selectFRLanguage = useCallback(() => {
    if (langFRRef.current) {
      if (typeof(sendData)=="function") {
        sendData(langFRRef.current?.innerText)
      }  
     setSelectedLanguage(langFRRef.current?.innerText)
     closeDropDown()
     
    }
  },[selectedLanguge])

  return (
    <>
     
      <button
        onClick={onClick}
        disabled={disabled}
        className={` ${props.className} `}
      >
        {selectedLanguge ==""?props.text:selectedLanguge}
      </button>
     
      {isDropDownOpen && (
        <div className="dropdown absolute sm:ml-10 lg:ml-[290px] sm:mt-8 sm:mb-[-105px] lg:mb-0 lg:mt-20 z-[100]" ref={langOptionsBoxRef}>
          <ul className={`${type == "button"?"dropdown-content":""} mt-2 menu bg-white rounded-[20px] z-[1] p-2 shadow drop-shadow-lg`}>
            <li className="flex p-1 rounded-[10px] hover:bg-overlay sm:text-xl lg:text-2xl">
              {type == "button"?<Link href={"/individual"} >Індивідуальне заняття  </Link>:<p ref={langEngRef} onClick={selectEngLanguage}>Індивідуальне заняття</p>}
              {/* <Image className="pl-1" src={eng} width={40} alt={""} /> */}
            </li>
            <li className="flex p-1 rounded-[10px] hover:bg-overlay sm:text-xl lg:text-2xl">
              {type == "button"?<Link href={"/group"} >Групове заняття </Link>:<p ref={langFRRef} onClick={selectFRLanguage}>Групове заняття</p>}
              {/* <Image className="pl-1" src={frn} width={40} alt={""} /> */}

            </li>
          </ul>
        </div>
      )}
    </>
  );
};
