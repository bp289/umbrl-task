import React from "react";

type Props = {};

export const Toggle = (props: Props) => {
  return (
    <span className="flex gap-2 text-black font-light ">
      Monthly
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="peer-focus:ring-blue-300dark:peer-focus:ring-blue-800 peer relative h-6 w-[55px] rounded-full bg-gray-200 p-3 after:absolute after:start-[4px] after:top-[3px] after:h-[18px] after:w-[18px] after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-[160%]"></div>
      </label>
      Yearly
    </span>
  );
};
