import React, { useEffect, useState } from "react";

interface StatsProps {
  pokemonId: number;
}

interface PokemonStat {
  name: string;
  value: number;
}

const Stats: React.FC<StatsProps> = ({ pokemonId }) => {
  const [stats, setStats] = useState<PokemonStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [animatedWidths, setAnimatedWidths] = useState<number[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const data = await res.json();

        const formattedStats = data.stats.map((s: any) => ({
          name: s.stat.name
            .replace("-", " ")
            .toUpperCase()
            .replace(/\b(\w)/g, (c: string) => c.toUpperCase()),
          value: s.base_stat,
        }));

        setStats(formattedStats);
        setAnimatedWidths(new Array(formattedStats.length).fill(0));
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [pokemonId]);

  useEffect(() => {
    if (stats.length > 0) {
      const timeout = setTimeout(() => {
        setAnimatedWidths(stats.map((stat) => (stat.value / 255) * 200));
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [stats]);

  if (loading) {
    return (
      <div className="bg-[#333] text-white rounded-2xl w-[30rem] max-w-full p-5 font-jaro flex justify-center items-center text-base sm:text-lg">
        Loading stats...
      </div>
    );
  }

  return (
    <div className="bg-[#333] text-white rounded-2xl w-[30rem] max-w-full p-5 font-jaro flex flex-col justify-center items-center">
      <div className="text-lg sm:text-2xl mb-4">STATS</div>
      <div className="flex gap-4 sm:gap-10 w-full overflow-x-auto">
        <table className="text-sm sm:text-xl w-full">
          <tbody>
            {stats.map((stat, idx) => (
              <tr key={stat.name}>
                <td className="px-1 sm:px-2 text-right">{stat.name}</td>
                <td className="px-1 sm:px-2 py-2 sm:py-4">
                  <div className="rounded h-2 w-[120px] sm:w-[200px] bg-gray-600">
                    <div
                      className="rounded h-2 bg-white transition-all duration-500"
                      style={{
                        width: `${
                          animatedWidths[idx] *
                          (window.innerWidth < 640 ? 0.6 : 1)
                        }px`,
                      }}
                    ></div>
                  </div>
                </td>
                <td className="px-2 sm:px-5">{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
