import React from "react";
import { TextSection } from "./TextSection";
type Props = {};

export const Hero = (props: Props) => {
  return (
    <section className=" flex flex-col gap-[30px]">
      <h1 className="text-black text-6xl font-extrabold">Pricing & Plans</h1>

      <TextSection>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <p>Build your next consultancy website withing a few minutes.</p>
      </TextSection>
    </section>
  );
};
