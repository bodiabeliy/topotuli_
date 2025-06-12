import Banner from "@/components/banners/LanguageBanner";
import bannerImage from "../../../public/banner_comment.png"
import WhyInduvidual from "@/components/WhyEnglish/WhyEnglish";
import PriceList from "@/components/PriceList/PriceEngList";
import { Form } from "@/components/Form";
const Individual = () => {
    return ( 
    <>
    <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto sm:h-max lg:h-screen">
        <Banner bannerImage={bannerImage} occupation="індивідуальні" navLink="price"/>
      </div>
      <div className="">
        <WhyInduvidual />
      </div>
      <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
      <PriceList />
      </div>
        <Form />
    </> );
}
 
export default Individual;