import Image from "next/image";
import { Hero } from "./components/Hero";
import { Toggle } from "./components/Toggle";
import { TextSection } from "./components/TextSection";
import { FeatureCard } from "./components/FeatureCard";
import { TierCard } from "./components/TierCard";

type Tier = {
  tierName: string;
  buttonType: "light" | "dark";
  price: number;
  tierPerks: {
    value: string;
    included: boolean;
  }[];
};

const tierList: Tier[] = [
  {
    tierName: "starter",
    buttonType: "light",
    price: 19,
    tierPerks: [
      { value: "commercial licence", included: true },
      { value: "100+ HTML ui elements", included: true },
      { value: "01 Domain support", included: true },
      { value: "6 months premium", included: false },
      { value: "lifetime Update4", included: false },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24 bg-white">
      <Hero />
      <div className="flex gap-2">
        <Toggle />
        <p className="text-[#5a54f2] font-semibold border bg-[#b8b5f2] p-2 rounded-full uppercase text-[10px]">
          save 25%
        </p>
      </div>

      <div>
        {tierList.map((tierItem: Tier) => {
          const { price, tierName, buttonType, tierPerks } = tierItem;
          return (
            <TierCard
              key={tierName}
              price={price}
              tierName={tierName}
              buttonType={buttonType}
              tierPerks={tierPerks}
            />
          );
        })}
      </div>
      <h1 className="text-black text-6xl font-extrabold">Check our features</h1>
      <TextSection>
        <p>
          with lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <p>Build your next consultancy website withing a few minutes.</p>
      </TextSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10"></div>
      <div>
        <div></div>
      </div>
    </main>
  );
}
