import Image from "next/image";
import { useSelector } from "react-redux";

const Section = ({ data, forwardedRef }) => {
  const moneyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const coinSelector = useSelector((state) => state.coin);

  return (
    <>
      <div className="flex justify-center items-center gap-x-32 py-60 mt-96 bg-DarkGrey">
        <Image
          className={`w-[30rem]  z-20 transition-all duration-700 animate-[bounce_1.7s_ease-in-out_infinite] `}
          src={require(`@/app/images/${coinSelector}.png`)}
          alt={`${coinSelector}`}
        />
        <div className="flex flex-col items-center  gap-y-10">
          <h2 ref={forwardedRef} className="text-7xl font-bold">
            {data?.name} ({data?.symbol.toUpperCase()})
          </h2>
          <div className="flex gap-x-10 border border-white rounded-md px-10 py-10 text-center">
            <div>
              {" "}
              <p>Price</p>{" "}
              <p className="text-BabyBlue">
                {moneyFormat.format(data?.market_data.current_price.usd)}
              </p>{" "}
            </div>
            <div>
              {" "}
              <p>Volume</p>{" "}
              <p className="text-BabyBlue">
                {data?.market_data.total_volume.usd}
              </p>{" "}
            </div>
            <div>
              {" "}
              <p>Mkt Cap</p>{" "}
              <p className="text-BabyBlue">
                {moneyFormat.format(data?.market_data.market_cap.usd)}
              </p>{" "}
            </div>
          </div>
          <div className="flex gap-x-10">
            <button className="bg-BabyBlue py-2 px-10 rounded-full text-black transition-all hover:bg-white">
              Buy Now
            </button>
            <button className="border border-white py-2 px-10 rounded-full transition-all hover:bg-black">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
