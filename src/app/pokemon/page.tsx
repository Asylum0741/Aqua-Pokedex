"use client";

import Navbar from "@/app/components/Navbar";
import React, { useEffect, useState } from "react";
import fetchPokemonData from "../utils/fetchpokedata";
import type { Pokemon } from "../utils/fetchpokedata";
import PokemonCard from "../components/PokemonCard";
import { sortandFilter } from "../utils/sortandfilter";
import { LucideSearch } from "lucide-react";

export default function Pokemon() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const [typeFilter, setTypeFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState<
    "id-asc" | "id-desc" | "name-asc" | "name-desc"
  >("id-asc");

  useEffect(() => {
    fetchPokemonData(151, 0).then((data) => {
      setAllPokemons(data);
      setFilteredPokemons(data);
    });
  }, []);

  useEffect(() => {
    const [key, order] = sortOption.split("-") as [
      "id" | "name",
      "asc" | "desc"
    ];

    const processed = sortandFilter(
      allPokemons,
      { type: typeFilter, searchText },
      { key, order }
    );

    setFilteredPokemons(processed);
  }, [typeFilter, searchText, sortOption, allPokemons]);
  const filter = [
    "All",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  // const [pokemons, setPokemons] = useState<any[]>([]);

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Navbar />
      <div>
        <h1 className="text-6xl mb-4 text-center font-jaro text-teal-700">
          Pokémon List
        </h1>

        <div className="flex justify-center items-center flex-col sm:flex-row gap-4 my-4"></div>

        <div className="flex gap-4 mb-4">
          {/* Search Bar */}

          <div className="flex flex-col">
            <div className="flex justify-center items-center flex-col gap-7 py-5">
              <div className="font-jaro text-2xl sm:text-4xl ">
                Search Pokemon
              </div>
              <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
                <input
                  id="search-input"
                  type="text"
                  className="sm:w-xl h-15 caret-teal-700 pl-4 focus:outline-none relative rounded-[15px] focus:shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] border-[3px] border-teal-500 text-teal-700 font-bold text-xl font-mont"
                />
                <button
                  className="flex bg-teal-500 h-14 w-14 sm:h-16 sm:w-16 rounded-[100%] items-center justify-center shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] active:scale-[0.95]"
                  onClick={() =>
                    setSearchText(
                      (() => {
                        const select = document.getElementById(
                          "search-input"
                        ) as HTMLSelectElement | null;
                        return select ? select.value : " ";
                      })()
                    )
                  }
                >
                  <LucideSearch color="white" size={32} />
                </button>
              </div>
            </div>

            {/* Sorting Code */}
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <select
                  className="sm:w-[30vw] h-12 borderteal text-teal-700 text-center appearance-none"
                  name="sort"
                  id="sort-pkmn"
                >
                  <option value="id-asc">Kanto Dex</option>
                  <option value="id-desc">Kanto Dex Reverse</option>
                  <option value="name-asc">A-Z</option>
                  <option value="name-desc">Z-A</option>
                </select>
                <div className="flex">
                  <button
                    className=" w-l h-[40px] px-4 py-2 cursor-pointer bg-teal-500 font-jaro text-white rounded-xl shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] active:scale-[0.95]"
                    onClick={() =>
                      setSortOption(
                        (() => {
                          const select = document.getElementById(
                            "sort-pkmn"
                          ) as HTMLSelectElement | null;
                          return select
                            ? (select.value as
                                | "id-asc"
                                | "id-desc"
                                | "name-asc"
                                | "name-desc")
                            : "id-asc";
                        })()
                      )
                    }
                  >
                    Sort
                  </button>
                </div>
              </div>

              {/* Filtering Code */}

              <div className="flex justify-center items-center gap-4">
                <select
                  className="sm:w-[30vw] h-12 borderteal text-teal-700 text-center appearance-none"
                  name="filter"
                  id="filter-pkmn"
                >
                  {filter.map((type) => (
                    <option value={type.toLowerCase()} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="flex">
                  <button
                    className=" w-l h-[40px] px-4 py-2 cursor-pointer bg-teal-500 font-jaro text-white rounded-xl shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] active:scale-[0.95]"
                    onClick={() =>
                      setTypeFilter(
                        (() => {
                          const select = document.getElementById(
                            "filter-pkmn"
                          ) as HTMLSelectElement | null;
                          return select ? select.value : "all";
                        })()
                      )
                    }
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pokemon Cards display */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPokemons.map((pokemon) => {
            return (
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types.map((type) => type.toLowerCase())}
                key={pokemon.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
