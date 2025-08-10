import React from "react";

type Buttonprops = {
  text: string;
};

const Button = ({ text }: Buttonprops) => {
  return (
    <div className="flex">
      <button className=" w-l h-[40px] px-4 py-2 cursor-pointer bg-teal-500 font-jaro text-white rounded-xl shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] active:scale-[0.95]">
        {text}
      </button>
    </div>
  );
};

export default Button;
