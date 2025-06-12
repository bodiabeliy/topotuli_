import Banner from "@/components/banners/LanguageBanner";
import bannerImage from "../../../public/banner_comment.png"
import WhyGroup from "@/components/WhyFranch/WhyFranch";
import { Form } from "@/components/Form";
import PriceList from "@/components/PriceList/PriceFranchList";

const Group = () => {
    return ( 
    <>
      <>
    <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto sm:h-max lg:h-screen">
        <Banner bannerImage={bannerImage} occupation="групові" navLink="price"/>
      </div>
      <div className="">
        <WhyGroup />
      </div>
      <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
      <PriceList />
      </div>
        <Form />
    </> 
    </> );
}
 
export default Group;