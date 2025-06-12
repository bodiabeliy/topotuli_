"use client";
import { useCallback, useState } from "react";
import Logo from "../../public/logo_.png";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";

export const NavigationManu = () => {

    const router = useRouter();
    const pathname = usePathname();

  const [opened, setOpened] = useState(false);

  const navigateLink = useCallback((e:any, href:string):any => {
    e.preventDefault()
    router.push(href)
    setOpened(false)
  }, [opened])

  const navigateTo = (link:string) => {
    const url = link;
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <div className="lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
       <div className="flex justify-between lg:max-w-[1050px] w-full sm:pt-0 lg:pt-12 items-center	lg:ml-[21px]">
      {/* <img onClick={()=>navigateTo("/")} className="sm:scale-75 lg:scale-100 sm:mt-[15px] lg:none" src={Logo.src} alt="" width={100} /> */}
      <div className="navbarDesktop sm:hidden md:block">
        <ul className="mt-3 text-lg lg:mr-[-50px] tracking-navigateLink text-white">
          <Link href={"/"} onClick={(e) =>navigateLink(e, "/")} className="ml-10 hover:text-mainYellow">
          Про мене
          </Link>
          {/* <Link className="ml-10 hover:text-green" href={"#speakers"}>
            Відгуки студентів
          </Link> */}
          {/* <Link href={"/#approach"} onClick={(e) =>navigateLink(e, "/#approach")} className="ml-10 hover:text-green" >
            Уроки
          </Link> */}
          <Link href={"/individual"} onClick={(e) =>navigateLink(e, "/individual")} className="ml-10 pt-4 hover:text-mainYellow">
            Індивідуальні заняття
          </Link>
          <Link href={"/group"} onClick={(e) =>navigateLink(e, "/group")} className="ml-10 pt-4 hover:text-mainYellow">
           Групові заняття
          </Link>
          {/* <Link href={"/#priceEng"} onClick={(e) =>navigateLink(e, `${pathname !=""?`/english/#price`:`${pathname}/#price`}`)} className="ml-10 pt-4 hover:text-green">
          Тарифи
          </Link> */}
          
        </ul>
      </div>
      
      <div className="navbarMobile sm:block md:hidden w-full">
        <ul className={`tracking-navigateLink ${opened ? "block":"hidden" } sm:absolute bg-green text-white md:relative sm:left-0 sm:top-0 sm:pt-10 sm:pb-10 sm:h-screen flex flex-col w-full z-10 font-xl z-[999999]`}>
          <Link href={"/"} onClick={(e) =>navigateLink(e, "/")} className="ml-10 pt-4 hover:text-mainYellow">
          Про мене
          </Link>
          {/* <Link className="ml-10 pt-4 hover:text-green" href={"#speakers"} >
          Відгуки студентів
          </Link> */}
           {/* <Link href={"https://soundgame-kappa.vercel.app/"} onClick={(e) =>navigateLink(e, "https://soundgame-kappa.vercel.app/")} className="ml-10 pt-4 hover:text-mainYellow">
             Звукове лото
          </Link> */}
          <Link href={"/individual"} onClick={(e) =>navigateLink(e, "/individual")} className="ml-10 pt-4 hover:text-mainYellow">
             Індивідуальні заняття
          </Link>
          <Link href={"/group"} onClick={(e) =>navigateLink(e, "/group")} className="ml-10 pt-4 hover:text-mainYellow">
          Групові заняття
          </Link>
          {/* <Link href={"/#priceEng"} onClick={(e) =>navigateLink(e, `${pathname !=""?`/english/#price`:`${pathname}/#price`}`)} className="ml-10 pt-4 hover:text-green">
          Тарифи
          </Link> */}
          
        </ul>
       
      </div>
      <div className={`sm:block md:hidden mr-4 mt-4 absolute right-0 top-0 tham tham-e-squeeze tham-w-6 pt-3 ${opened&& "tham-active"} z-[999999] `} onClick={() =>setOpened(!opened) }>
        <div className="tham-box">
          <div className="tham-inner"></div>
        </div>
      </div>
    </div>
    </div>
   
  );
};
