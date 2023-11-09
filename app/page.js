"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Section from "./Components/Section";
import Market from "./Components/Market";
import Services from "./Components/Services";
import { useDispatch, useSelector } from "react-redux";
import { changeCoin } from "./Slices/coinSlice";

export default function Home() {
  const coinSelector = useSelector((state) => state.coin);

  const [coinData, setCoinData] = useState(null);
  const [coinList, setCoinList] = useState(null);
  const [bitcoin, setBitcoin] = useState("");
  const [ethereum, setEthereum] = useState("");
  const [tether, setTether] = useState("");

  let coinRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinSelector}`)
      .then((res) => res.json())
      .then((data) => {
        setCoinData(data);
      })
      .catch((error) => console.log(error));
  }, [coinSelector]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoinList(data);
      });
  }, []);

  const dispatch = useDispatch();

  // Click Listeners

  const coinScroll = () => {
    coinRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  const clickBitcoin = () => {
    setEthereum("translate-x-[70rem]");
    setTether("translate-x-[70rem]");
    setTimeout(() => {
      setBitcoin("opacity-0");
      coinScroll();
    }, 500);

    dispatch(changeCoin("bitcoin"));

    setTimeout(() => {
      setEthereum("");
      setTether("");
      setBitcoin("");
    }, 800);
  };

  const clickTether = () => {
    setEthereum("translate-x-[70rem]");
    setBitcoin("-translate-x-[70rem]");
    setTimeout(() => {
      setTether("opacity-0");
      coinScroll();
    }, 500);

    dispatch(changeCoin("tether"));

    setTimeout(() => {
      setEthereum("");
      setBitcoin("");
      setTether("");
    }, 800);
  };

  const clickEthereum = () => {
    setBitcoin("-translate-x-[70rem]");
    setTether("-translate-x-[70rem]");
    setTimeout(() => {
      setEthereum("opacity-0");
      coinScroll();
    }, 500);

    dispatch(changeCoin("ethereum"));

    setTimeout(() => {
      setEthereum("");
      setTether("");
      setBitcoin("");
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-y-32 pt-20 overflow-x-hidden">
        <div className="flex flex-col justify-center items-center text-center pt-20 gap-y-8">
          <h1 className="text-6xl font-bold ">THE NEXT GENERATION OF CRYPTO</h1>
          <p className="w-3/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
          <div className="flex  gap-x-8">
            <button className="bg-BabyBlue py-2 px-10 rounded-full text-black transition-all hover:bg-white">
              Sign Up
            </button>
            <button className="border border-white py-2 px-10 rounded-full transition-all hover:bg-black">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center  ">
          <Image
            onClick={() => clickBitcoin()}
            className={`w-72 -mr-28 z-30 transition-all duration-700 cursor-pointer 	hover:scale-110 hover:-translate-y-32 ${bitcoin}`}
            src={require("@/app/images/bitcoin.png")}
            alt="Bitcoin"
          />
          <Image
            onClick={() => clickTether()}
            className={`w-72  z-20 transition-all duration-700 cursor-pointer hover:scale-110 hover:-translate-y-32 ${tether} `}
            src={require("@/app/images/tether.png")}
            alt="Tether"
          />
          <Image
            onClick={() => clickEthereum()}
            className={`w-72 -ml-28 z-10 transition-all duration-700 cursor-pointer hover:scale-110 hover:-translate-y-32 ${ethereum}`}
            src={require("@/app/images/ethereum.png")}
            alt="Ethereum"
          />
        </div>
      </div>

      {/* Coin Section */}
      <Section forwardedRef={coinRef} data={coinData} />

      {/* Market Section */}
      <Market data={coinList} />

      {/* Services Section */}
      <Services />
    </>
  );
}
