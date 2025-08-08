import React from "react";
import Image from "next/image";
import Button from "./Button";
import Stats from "./Stats";
import Evolutions from "./Evolutions";

const PokemonPage = () => {
  return (
    <div className="flex">
      <div className="w-[60%]">
        <div className="flex justify-items-start items-center relative mx-1.5 ">
          <div className="bg-orange-500 p-3 text-5xl text-white font-jaro px-6 w-[13rem] clip-path1">
            #0006
          </div>
          <div className="bg-orange-500 p-3 mx-[-15] text-5xl text-white font-jaro px-10 w-[15rem] clip-path2">
            Charizard
          </div>
        </div>
        <div className="pkmn-img flex justify-items-start flex-col px-4 my-4 ">
          <div>
            <img src="/images/charizard.png" alt="Charizard" width={450} />
          </div>
          <div className="md:mx-40 md:my-5">
            <Button text="Pokemon Cry" />
          </div>
        </div>
      </div>
      <div className="pkmn-desc w-[40%] my-20 mx-10">
        <div>
          <span className="font-mont text-left text-l">Description</span>
          <hr />
          <span className="font-jaro text-xl">
            Spits fire that is hot enough to melt boulders. Known to cause
            forest fires unintentionally.
          </span>
        </div>
        <div className="my-4">
          <span className="font-mont text-left text-l">Details</span>
          <hr />
          <div className="flex justify-between mx-0">
            <span className="font-jaro text-xl">Height:1.7M</span>
            <span className="font-jaro text-xl">Weight: 90kg</span>
            <span className="font-jaro text-xl">Gender: Male / Female</span>
          </div>
        </div>
        <div>
          <span className="font-mont text-left text-l">Abilities</span>
          <hr />
          <div className="flex justify-items-start md:gap-19">
            <span className="font-jaro text-xl">Blaze</span>
            <span className="flex gap-2 items-center">
              <span className="font-jaro text-xl">Solar Power</span>
              <p className="font-mont">(Hidden)</p>
            </span>
          </div>
        </div>
        <div className="my-4">
          <span className="font-mont text-left text-l">Type</span>
          <hr />
          <div className="flex gap-5 my-2">
            <img src="/images/type/FIRE.svg" alt="" />
            <img src="/images/type/FLYING.svg" alt="" />
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default PokemonPage;
