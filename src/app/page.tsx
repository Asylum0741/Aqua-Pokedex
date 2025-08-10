"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import PokemonCard from "./components/PokemonCard";
import PokemonPage from "./components/PokemonPage";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const [first12pokemons, setFirst12Pokemons] = useState<any[]>([]);
  const [pkmn, setpkmn] = useState<any | null>(null);

  useEffect(() => {
    fetchpokemon();
  }, []);

  useEffect(() => {
    const fetchFirst12Pokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
      );
      const data = await response.json();
      const pokemons = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setFirst12Pokemons(pokemons);
    };
    fetchFirst12Pokemons();
  }, []);

  const fetchpokemon = async () => {
    const max = 151;
    const getRandomInt = (max: number) => Math.floor(Math.random() * max);
    const randomId = getRandomInt(max) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}/`
    );
    const pkmn = await response.json();
    setpkmn(pkmn);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-6 sm:px-0 px-2">
        {/* SECTION 1 - First 12 Pokémon Grid */}
        <section className="w-full max-w-6xl">
          <div
            className="
              grid gap-4
              grid-cols-2
              sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              sm:gap-4
            "
          >
            {first12pokemons.map((pokemon: any) => (
              <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                <div className="w-full sm:w-auto">
                  <PokemonCard
                    id={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types.map((t: { type: { name: string } }) =>
                      t.type.name.toLowerCase()
                    )}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Link href="/pokemon">
              <Button text="See all Pokemon" />
            </Link>
          </div>
        </section>

        {/* SECTION 2 - Random Pokémon */}
        <section className="w-full sm:max-w-3xl flex flex-col items-center gap-4">
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded-xl shadow active:scale-95 font-jaro"
            onClick={fetchpokemon}
          >
            I&#39;m Feeling Lucky
          </button>
          <div
            className="
              pokemon-card
              p-2
              sm:p-5
              w-full sm:w-6xl
              overflow-x-hidden
            "
          >
            <PokemonPage pkmn={pkmn} />
          </div>
        </section>

        {/* SECTION 3 - Footer */}
        <Footer />
      </div>
    </>
  );
}
