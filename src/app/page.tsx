import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Button from "./components/Button";
import Sort from "./components/Sort";
import PokemonCard from "./components/PokemonCard";
import PokemonPage from "./components/PokemonPage";
import Evolutions from "./components/Evolutions";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Navbar />
      <Search />
      <Button text="Advanced Search" />
      <div className="flex justify-center items-center flex-col sm:flex-row gap-4 my-4"></div>
      <PokemonCard id={6} name="Charizard" types={["Fire", "Flying"]} />
      <Button text="See more" />
      <Button text="I'm feeling Lucky" />
      <div className="pokemon-card md:w-[80%] items-center my-8 p-5">
        <PokemonPage />
      </div>
      <Evolutions />
      <div className="h-4xl">jjdskm</div>
    </div>
  );
}
