import React from "react";
import Button from "./Button";

type SortProps = {
  data: string[];
  text: string;
  val: string;
};

const Sort = ({ data, val, text }: SortProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <select
        className="sm:w-[30vw] h-12 borderteal text-teal-700 text-center appearance-none"
        onChange={(e) => console.log(e.target.value)}
      >
        {data.map((opt: string) => (
          <option value={val} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      <Button text={text} />
    </div>
  );
};

export default Sort;
