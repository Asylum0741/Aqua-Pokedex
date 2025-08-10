// import React from "react";
// import { ArrowRight } from "lucide-react";

// interface EvoProps {
//   pokemonId: number;
// }

// const Evolutions: React.FC<EvoProps> = ({ pokemonId }) => {
//   //I hate Typescript with a passion

//   const fetchEvolutions = async (id: number) => {
//     try {
//       const res = await fetch(
//         `https://pokeapi.co/api/v2/evolution-chain/${id}/`
//       );
//       const data = await res.json();}}
//   return (
//     <div>
//       <div className="flex items-center flex-col">
//         <span className="font-mont items-center text-5xl mb-3">Evolutions</span>
//         <hr className="w-[80vw]" />
//       </div>
//       <div className="flex justify-evenly">
//         {Object.entries(pkmn).map(([name, id], index, array) => {
//           const imgnum = id.slice(-1);
//           const imgsrc = `/images/${imgnum}.png`;
//           const isBefore = index !== array.length - 1;

//           return (
//             <div
//               key={id}
//               className="flex items-center font-jaro text-2xl mx-10 my-5"
//             >
//               <div className="flex flex-col items-center">
//                 <span>{id}</span>
//                 <img src={imgsrc} alt="" width={200} />
//                 <span>{name}</span>
//               </div>
//               {isBefore && <ArrowRight className="ml-6" />}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Evolutions;
