import Image from "next/image"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AboutImage from "@/../public/selfball.png"



const About = () => {
  return (
    <>
      <div id="about" className="aboutWrapper relative  bg-bottom flex justify-end h-70% ">
      <Image className="absolute sm:hidden lg:block lg:left-[10px]  lg:top-[-20px] lg:scale-75 w-[400px]" src={AboutImage} alt={"Tutor Iryna Yarychewska"} />
        <div id="about" className="w-[1000px] sm:mr-0 lg:mr-[-60px] sm:mt-10 lg:mt-32 z-50">
          {/* <p className="flex justify-center sm:text-3xl lg:text-5xl mx-auto sm:w-[75%] lg:w-1/2  p-3  font-bold text-white bg-green font-grotesk rounded-[25px] border-green border-2 shadow-[0px_10px_20px_rgba(0,_0,_0,_0.6),_0_10px_20px_pink]">Хто я?</p> */}
          <p className="flex justify-center text-center sm:text-3xl lg:text-5xl mx-auto mt-1 sm:w-[75%] lg:w-1/2  p-3 min-w-[300px] font-bold text-white bg-pink font-grotesk rounded-[25px] border-green-light border-2 rotate-3 shadow-[0px_10px_20px_rgba(0,_0,_0,_0.6),_0_10px_20px_pink]">Давайте знайомитися</p>

          <div className="sm:p-5">
            <p className="aboutSectionDescriptoion bg-mainYellow sm:p-[15px] rounded-[20px] text-justify sm:text-[24px] lg:text-[28px] lg:leading-[40px] mt-3 sm:overflow-y-scroll lg:overflow-y-auto">
            Вcім привіт, мене звати Інна Бєлашенок - я засновниця корекційно-навчального простору <b className="">Веселі топотулі</b>. <br /> <br />
            За плечима <b>15-річний</b> досвід та практика у сферах:
            <ol className="p-3 text-start">
              <li>1) освіти з нормотиповими дітьми;</li>
              <li>2) педагогічноЇ реабілітації;</li>
              <li>3) соціалізації і коррекції;</li>
              <li>4) Маю компетенції роботи з дітьми що мають затримку чи відсутність мовлення;</li>
              <li>5) інтелектуальні, психофізичні та генетичні порушення;</li>
              <li>6) ДЦП, СДУГ, РАС, синдром Аспергера</li>
            </ol>
             
            
            <hr className="mb-4"/>
            У 2021 році  стала дійсним членом <b> Всеукраїнської асоціації </b>батьків та фахівців спеціальної освіти та інклюзивного навчання.
            <Image className=" sm:block lg:hidden" src={AboutImage} alt={"About me"} />

            </p>

          </div>
          {/* 1 variant */}
         
          {/* 2 variant */}
          
          
        </div>
      </div>
    </>
  );
};

export default About;
