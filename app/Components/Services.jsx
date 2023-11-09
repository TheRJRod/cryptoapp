import { SiBitcoinsv } from "react-icons/si";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SiAmp } from "react-icons/si";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const Services = () => {
  const [counter, setCounter] = useState(0);
  const [transition, setTransition] = useState(false);

  const handleRightArrow = () => {
    setTransition(true);
    setTimeout(() => {
      setCounter(counter + 1);
      setTransition(false);
    }, 1100);
  };

  const handleLeftArrow = () => {
    setTransition(true);
    setTimeout(() => {
      setCounter(counter - 1);
      setTransition(false);
    }, 1100);
  };

  const info = [
    {
      quote1: "Test 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      quote2: "Test 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      quote3: "Test 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      quote1: "Test 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      quote2: "Test 5 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      quote3: "Test 6 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      quote1: "Test 7 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      quote2: "Test 8 Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      quote3:
        "Test 9 Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <div className="flex text-lg justify-center items-center  pb-28 gap-x-10 mx-52">
        <BsChevronLeft
          onClick={handleLeftArrow}
          className={`text-7xl hover:scale-150  transition-all ${
            counter == 0 ? "opacity-0" : "cursor-pointer"
          }`}
        />
        <div
          className={`flex items-center border border-white p-10 rounded-md transition-all duration-1000 font-bold shadow-md shadow-black ${
            !transition ? "" : "translate-y-10 opacity-0"
          }`}
        >
          <p>&quot;{info[counter].quote1}&quot;</p>
          <SiBitcoinsv className="text-7xl" />
        </div>

        <div
          className={`flex items-center border border-white p-10 rounded-md transition-all duration-1000 bg-BabyBlue text-black font-bold shadow-md shadow-black ${
            !transition ? "" : "translate-y-10 opacity-0"
          }`}
        >
          <p>&quot;{info[counter].quote2}&quot;</p>
          <RiMoneyDollarCircleFill className="text-7xl" />
        </div>

        <div
          className={`flex items-center border border-white p-10 rounded-md font-bold shadow-md shadow-black transition-all duration-1000 ${
            !transition ? "" : "translate-y-10 opacity-0"
          }`}
        >
          <p>&quot;{info[counter].quote3}&quot;</p>
          <SiAmp className="text-7xl" />
        </div>
        <BsChevronRight
          onClick={handleRightArrow}
          className={`text-7xl hover:scale-150  transition-all ${
            counter >= 2 ? "opacity-0" : "cursor-pointer"
          }`}
        />
      </div>
    </>
  );
};

export default Services;
