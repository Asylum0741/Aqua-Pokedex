import React from "react";

type PokemonCardProps = {
  id: number;
  name: string;
  types: string[];
};
const PokemonCard = ({ id, name, types }: PokemonCardProps) => {
  return (
    <div className="my-6 w-70 h-90 relative rounded-2xl border-5 border-teal-800 flex justify-center items-center">
      <div className="font-jaro text-teal-700 text-3xl absolute top-3 right-5">
        #{String(id).padStart(4, "0")}
      </div>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        width={250}
        className="relative bottom-4"
      />

      <div className="flex flex-col">
        <div className="font-jaro text-teal-700 text-3xl absolute bottom-10 left-5">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>

        <div className="font-jaro text-teal-700 text-xl absolute bottom-3 left-5">
          Type:
        </div>
        <div className="absolute bottom-3.5 left-20 flex gap-2">
          {types.map((type) => (
            <img
              key={type}
              src={`/images/type/${type}.svg`}
              alt={type}
              width={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
