import React from "react";

const Stats = () => {
  const data: { [key: string]: string } = {
    HP: "78",
    ATK: "84",
    DEF: "78",
    SPD: "109",
    "SP. ATK": "85",
    "SP. DEF": "100",
  };

  return (
    <div className="bg-[#333] text-white rounded-2xl w-[30rem] p-5 font-jaro flex flex-col justify-center items-center">
      <div className="text-2xl mb-4">STATS</div>
      <div className="flex gap-10">
        <table className="text-xl">
          <tbody>
            {Object.entries(data).map(([label, value]) => (
              <tr key={label}>
                <td className="px-5 text-right">{label}</td>
                <td className="px-5">
                  <div className="h-1 w-[200px] bg-white"></div>
                </td>
                <td className="px-5">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
