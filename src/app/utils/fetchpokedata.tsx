export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export default async function fetchPokemonData(
  limit: number = 151,
  offset: number = 0
) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const data = await response.json();

    const Pokemondetails = await Promise.all(
      data.results.map(async (p: any) => {
        const details = await fetch(p.url).then((res) => res.json());
        return {
          id: details.id,
          name: details.name.charAt(0).toUpperCase() + details.name.slice(1),
          types: details.types.map(
            (t: any) =>
              t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
          ),
          image: details.sprites.front_default,
        };
      })
    );

    return Pokemondetails;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
}
