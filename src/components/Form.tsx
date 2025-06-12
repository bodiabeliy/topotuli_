"use client"
import Image from "next/image"
import { useCallback, useState } from "react";
import { ActionButton } from "./buttons/ActionButton";
import api from '@/services/index';
import { ToastContainer, toast } from 'react-toastify';

import shapedText from "../../public/blueshape.png"
import language from "../../public/translation-icon.png"

import 'react-toastify/dist/ReactToastify.css';
import { DropDownButton } from "./buttons/DropDownButton";
import { IconArrow } from "./icons/Arrow";

export const Form = () => {

  const [email, setEmail] = useState<string>("")
  const [telegram, setTelegram] = useState<string>("")
  const [fullname, setFullName] = useState<string>("")

  const [selectedLanguge, setSelectedLanguage] = useState<string>("")


  const [notEmpty, setNotEmpty] = useState<boolean>(false)
  const [notValid, setNotValid] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const OpenDropDown = useCallback(() => {
    setIsDropDownOpen(!isDropDownOpen);
  }, [isDropDownOpen]);

  const handleDataFromChild = useCallback((value: string) => {
    setSelectedLanguage(() => {
      return value;
    });
  }, []);

  
  
  

  const CloseDropDown = useCallback(() => {
    setIsDropDownOpen(false);
  }, [isDropDownOpen]);

  const validateEmail = (email:string) => {
    
    const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isValid =regex.test(email)    
    return isValid
  };

  const EmailSender = useCallback(async() => {
    try {
      if (notValid) {
        setIsLoading(true)
        toast(`Відправлення...`)

        await api.post(
            `/send`,
            {
              email,
              fullname,
              telegram,
              selectedLanguge
            },
          );
      }


      setIsLoading(false)
      toast.success(`Заявка успішно відправлена!
        Очікуйте лист-підтвердження на вказаний email`) 
      setEmail("")
      setFullName("")
      setTelegram("")
      handleDataFromChild("")

    } catch (error) {
      console.log(error);
      
      toast.error(`Happpend error: ${error}`);
    }
  }, [email, notEmpty, notValid, fullname, telegram, selectedLanguge, isLoading])

  const SendEmail = useCallback((e:any)  => {
    setEmail(e.target.value)
    setNotValid(validateEmail(e.target.value))
    if (e.target.value == "") {
      setNotEmpty(true)

    }
    else setNotEmpty(false)
  },[email, notEmpty, notValid])


  const SendFullName = useCallback((e:any)  => {
    setFullName(e.target.value)
    
  },[fullname])

  const SendTelegram = useCallback((e:any)  => {
    setTelegram(e.target.value)
    
  },[telegram])
  

  return (
    <section id="form" className="relative sm:bg-white lg:bg-green w-full max-w-[1200px] m-auto flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between pt-10 pb-10 sm:mt-2 lg:mt-20 sm:mb-5 lg:mb-10">
       <p className="sm:block lg:hidden font-lora font-bold text-center sm:text-3xl lg:text-5xl mx-auto mt-1 sm:w-[75%] lg:w-1/2  p-3 min-w-[300px] font-bold text-white bg-pink font-grotesk rounded-[25px] border-green-light border-2 rotate-0 shadow-[0px_10px_20px_rgba(0,_0,_0,_0.6),_0_10px_20px_pink]">Реєстрація</p>

        <div className="flex justify-center sm:flex-row lg:flex-col">
            <h1 className="sm:text-center lg:text-left sm:text-xl lg:text-5xl font-lora font-bold sm:text-black lg:text-white uppercase sm:mt-5 lg:mt-0 z-[9999]">
            Тупаємо і граємося - <br />весело навчаємося!

            </h1>
        </div>
      <div className="rounded-[30px] sm:bg-green lg:bg-pink z-10 p-1 sm:w-[360px] lg:w-[560px] h-auto sm:m-auto sm:mt-5  border-2 border-white shadow-[0px_10px_20px_rgba(0,_0,_0,_0.6),_0_10px_20px_pink]">
        <div className="relative rounded-[30px] flex flex-col justify-start sm:w-full lg:w-[550px] p-5">
         <div className="flex flex-col">
          <p className="sm:hidden lg:block font-lora font-bold text-center text-white lg:relative sm:text-xl lg:text-3xl sm:mt-1 lg:mt-1 sm:pb-3 lg:pb-8">Реєстрація</p>
          <input className={`${notEmpty &&" border-[3px] border-mainYellow"} sm:p-2 lg:p-5 mb-3 rounded-[20px] w-full text-[#000]`} type="text" placeholder="Введіть електронну адресу..." onChange={(e) => SendEmail(e)} value={email}/>
          {notEmpty && <p className="text-mainYellow">Поле пошти не повинно бути порожнім!</p> }
          {!notValid && <p className="text-mainYellow">Введіть корректну email адресу!</p> }
          <input className={`${notEmpty &&" border-[3px] border-mainYellow"} sm:p-2 lg:p-5 mb-3 rounded-[20px] w-full text-[#000]`} type="text" placeholder="Введіть своє ім'я..." onChange={(e) => SendFullName(e)} value={fullname}/>

          <div className="flex sm:flex-col lg:flex-row">
          <input className={`sm:p-2 lg:p-5 mb-3 mr-2 rounded-[20px] sm:w-full lg:w-1/2 w-full text-[#000]`} type="text" placeholder="Введіть нік в телеграмі..."  onChange={(e) => SendTelegram(e)} value={telegram}/>
          <DropDownButton
              type="input"
              disabled={false}
              onClick={() => {
                OpenDropDown();
              }}
              closeDropDown={CloseDropDown}
              selectedValue={selectedLanguge}
              isDropDownOpen={isDropDownOpen}
              className={
                "sm:p-2 lg:p-5 mb-3 mr-2 rounded-[20px] sm:w-full lg:w-1/2 w-full hover:text-[#000] bg-white hover:bg-[#e6e6e6]"
              }
              sendData={handleDataFromChild}
              text={
                <>
                <div className="flex w-full align-center justify-around items-center">
                <p>Оберіть бажаний формат </p>
                {
                  isDropDownOpen ?
                  <IconArrow fill={"formInputText"} />
                  :
                  <IconArrow className="rotate-180" fill={"formInputText"} />
                }
  
                </div>
                </>
              }
            />
          </div>


          <ActionButton 
            onClick={() => EmailSender()} 
            className={` ${notEmpty || !notValid || telegram=="" || fullname=="" || selectedLanguge ==""? "bg-blockedButton disabled text-blockedText": "bg-yellow-lime"} m-auto rounded-full font-grotesk lg:font-semibold sm:text-2xl lg:text-3xl sm:p-2 lg:p-5 sm:w-full lg:w-[270px]`}
            text={"Записатись!"} 
            disabled={notEmpty || !notValid}
            />
          { <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

       />}
         </div>
        </div>
      </div>
    </section>
  );
};
