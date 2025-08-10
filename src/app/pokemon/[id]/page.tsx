"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PokemonPage, { PokemonType } from "../../components/PokemonPage";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error("Error fetching Pokémon:", err);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center p-4">
        {pokemon ? (
          <PokemonPage pkmn={pokemon} />
        ) : (
          <p className="text-xl font-jaro">Loading Pokémon...</p>
        )}
      </div>
      <Footer />
    </>
  );
}
