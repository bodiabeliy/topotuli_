import About from "@/components/About/About";
// import PriceList from "@/components/PriceList/PriceList";
import EfficiancyStatements from "@/components/EfficiancyStatements/EfficiancyStatements";
import Feedback from "@/components/Feedback/Feedback";

import Banner from "@/components/banners/Banner";
import Head from "next/head";
import { Form } from "@/components/Form";


// export const metaData ={
//   openGraph:{
//     title:"AniriYar",
//     description:"Твій репетитор з англійської та французької мов",
//     keywords:["репетитор", "репетитор з англійської", "англійська мова", "англійська за 1 хвилину", "вивчення англійської мови", "уроки англійської", "французька мова", "репетитор з французької мови", "французька 1 хвилину",  "вивчення французької мови", "уроки французької"],
//     icons: {
//       icon: "@/../../public/see you later.png"
//     },
//   }
  
// }

export default function Home() {
  
  return (
    <>
    <Head>
        <title>AniriYar</title>
        <link rel="icon" type="image/x-icon" href="@/../../public/see you later.png"></link>
        <meta name="description" content="Твій репетитор з англійської та французької мов" key="tutor" />
        <meta property="og:title" content="Твій репетитор з англійської та французької мов" />
        <meta
          property="og:description"
          content="Твій репетитор з англійської та французької мов"
        />
        <meta name="keywords" content="репетитор, репетитор з англійської, англійська мова, англійська за 1 хвилину, вивчення англійської мови, уроки англійської, французька мова, репетитор з французької мови, французька 1 хвилину, вивчення французької мови, уроки французької" />

        <meta
          property="og:image"
          content="@/../../public/see you later.png"
        />
      </Head>
      <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
        <Banner />
        <About />
        <EfficiancyStatements />
        <Feedback />
      </div>

      
      <Form />
      {/* <PriceList /> */}
    </>
  );
}
