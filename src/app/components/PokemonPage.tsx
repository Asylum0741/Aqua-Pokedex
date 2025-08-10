import React, { useEffect, useState } from "react";
import Button from "./Button";
import Stats from "./Stats";

export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  cries: {
    latest: string;
    legacy: string;
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonPageProps {
  pkmn: PokemonType | null;
}

// Type → Color dictionary
const typeColors: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const PokemonPage = ({ pkmn }: PokemonPageProps) => {
  const [description, setDescription] = useState<string>("");
  const [cryUrl, setCryUrl] = useState<string>("");

  useEffect(() => {
    if (!pkmn) return;

    // Save cry URL
    if (pkmn.cries?.latest) {
      setCryUrl(pkmn.cries.latest);
    }

    const fetchDescription = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pkmn.id}/`
        );
        const data = await res.json();
        const entry = data.flavor_text_entries.find(
          (item: any) => item.language.name === "en"
        );
        setDescription(
          entry ? entry.flavor_text.replace(/\f/g, " ") : "No flavor text found"
        );
      } catch (err) {
        console.error("Error fetching description:", err);
      }
    };

    fetchDescription();
  }, [pkmn]);

  if (!pkmn) return null;

  const mainType = pkmn.types[0]?.type.name || "normal";
  const bgColor = typeColors[mainType] || "#A8A77A";

  const playCry = () => {
    if (!cryUrl) return;
    const audio = new Audio(cryUrl);
    audio.volume = 0.12;
    audio.play();
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-6">
      {/* IMAGE + CRY BUTTON */}
      <div className="md:w-[60%] flex flex-col items-center">
        {/* Name & ID */}
        <div className="flex justify-start items-center gap-2 mx-1.5 flex-nowrap">
          <div
            className="p-2 sm:p-3 text-2xl sm:text-5xl text-white font-jaro px-4 sm:px-6 clip-path1"
            style={{ backgroundColor: bgColor }}
          >
            #{String(pkmn.id).padStart(4, "0")}
          </div>
          <div
            className="p-2 sm:p-3 text-2xl sm:text-5xl text-white font-jaro px-6 sm:px-10 clip-path2"
            style={{ backgroundColor: bgColor }}
          >
            {pkmn.name.charAt(0).toUpperCase() + pkmn.name.slice(1)}
          </div>
        </div>

        {/* Pokémon Image */}
        <div className="flex flex-col px-4 my-4 items-center">
          <img
            src={pkmn.sprites.other["official-artwork"].front_default}
            alt={pkmn.name}
            className="max-w-full h-auto"
          />
          <div className="mt-4">
            <button
              className="w-l h-[40px] px-4 py-2 cursor-pointer bg-teal-500 font-jaro text-white rounded-xl shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] active:scale-[0.95]"
              onClick={playCry}
            >
              Pokemon Cry
            </button>
          </div>
        </div>
      </div>

      {/* DESCRIPTION + DETAILS */}
      <div className="md:w-[40%] flex flex-col gap-4">
        {/* Description */}
        <div>
          <span className="font-mont text-left text-l">Description</span>
          <hr />
          <span className="font-jaro text-xl">
            {description || "Loading description..."}
          </span>
        </div>

        {/* Details */}
        <div>
          <span className="font-mont text-left text-l">Details</span>
          <hr />
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="font-jaro text-xl">
              Height: {pkmn.height / 10} m
            </span>
            <span className="font-jaro text-xl">
              Weight: {pkmn.weight / 10} kg
            </span>
            <span className="font-jaro text-xl">Gender: Male / Female</span>
          </div>
        </div>

        {/* Abilities */}
        <div>
          <span className="font-mont text-left text-l">Abilities</span>
          <hr />
          <div className="flex flex-col gap-2 mt-2">
            {pkmn.abilities.map((a, index) => (
              <span key={index} className="flex gap-2 items-center">
                <span className="font-jaro text-xl">
                  {a.ability.name.charAt(0).toUpperCase() +
                    a.ability.name.slice(1)}
                </span>
                {a.is_hidden && <p className="font-mont">(Hidden)</p>}
              </span>
            ))}
          </div>
        </div>

        {/* Types */}
        <div>
          <span className="font-mont text-left text-l">Type</span>
          <hr />
          <div className="flex gap-5 my-2">
            {pkmn.types.map((t, index) => (
              <img
                key={index}
                src={`/images/type/${t.type.name.toUpperCase()}.svg`}
                alt={t.type.name}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          <Stats pokemonId={pkmn.id} />
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
