import React from "react";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className=" flex flex-col gap-[30px]">
      <h1 className="text-black text-6xl font-extrabold">Pricing & Plans</h1>
      <div>
        <p className="text-black text-sm font-light">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <p className="text-black text-sm font-light">
          Build your next consultancy website withing a few minutes.
        </p>
      </div>
    </section>
  );
};
