import React from "react";

type PokemonCardProps = {
  id: number;
  name: string;
  types: string[];
};

const PokemonCard = ({ id, name, types }: PokemonCardProps) => {
  return (
    <div
      className="
        my-6
        relative rounded-2xl border-5 border-teal-800 flex justify-center items-center
        w-48 h-68 sm:w-70 sm:h-90
      "
    >
      {/* ID number */}
      <div
        className="
          font-jaro text-teal-700
          text-xl sm:text-3xl
          absolute top-2 sm:top-3 right-3 sm:right-5
        "
      >
        #{String(id).padStart(4, "0")}
      </div>

      {/* Pokémon Image */}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        width={150}
        className="sm:w-[250px] relative bottom-2 sm:bottom-4"
      />

      {/* Name & Type */}
      <div className="flex flex-col">
        <div
          className="
            font-jaro text-teal-700
            text-2xl sm:text-3xl
            absolute bottom-8 sm:bottom-10 left-3 sm:left-5
          "
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>

        <div
          className="
            font-jaro text-teal-700
            text-lg sm:text-xl
            absolute bottom-2 sm:bottom-3 left-3 sm:left-5
          "
        >
          Type:
        </div>

        <div
          className="
            absolute bottom-2 sm:bottom-3.5
            left-16 sm:left-20
            flex gap-1 sm:gap-2
          "
        >
          {types.map((type) => (
            <img
              key={type}
              src={`/images/type/${type}.svg`}
              alt={type}
              width={30}
              className="sm:w-[50px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
