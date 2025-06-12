import {priceEngList} from "../../utils/data"

const PriceList = () => {
  return (
    <>
    
    <div className="">
      <p
      id="price"
      className={`font-grotesk font-3xl  mt-10 sm:text-2xl font-bold text-center min-w-32  max-w-[120px] rounded-[12px] bg-green text-white p-2 m-auto`}
    >
      Тарифи
    </p>
    </div>
    <div className="flex sm:flex-col lg:flex-row justify-center">
    {
      priceEngList.map((priceEngItem:any)=> {
        return (
          <div key={priceEngItem.name} className="m-3 flex flex-col rounded-[25px] min-w-[330px] bg-white shadow-sm max-w-96 p-2 my-6 border-4 border-green-light">
        <div className={`m-0 mb-8 text-center text-[#000] border-green-light`}>
        <div className="mt-2">
          <div
            className={`font-grotesk font-3xl font-bold text-center min-w-32 w-full rounded-[25px] ${!priceEngItem.isEvenNumber ?"bg-yellow-lime text-[#000]":"bg-pink text-white"} p-4 border border-transparent`}
          >
            {priceEngItem.name}
          </div>
        </div>
        </div>
        <div className="p-0 w-full">
        <p className="text-center uppercase max-w-[240px] m-auto font-semibold text-slate-500 mb-4">
            {priceEngItem.desciption}
          </p>
         
          <ul className="flex flex-col gap-4 ml-5">
            {
                priceEngItem?.options.map((option:any)=> {
                  return (
                    <>
                     <li className="flex items-center gap-4">
                      🧡 
                        <p className="text-slate-500">{option}</p>
                     </li>
                    </>
                  )
                })
            }
          </ul>
        </div>
        <h1 className="relative flex justify-center font-lora gap-1 mt-4 font-bold text-[#000] text-6xl bottom-0">
            <span className="self-end text-3xl">{priceEngItem.price}грн/місяць</span>
          </h1>
      </div>
        )
      })
    }
    </div>
    
      
    </>
  );
};

export default PriceList;
