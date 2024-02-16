import React from "react";

type Props = {
  price: number;
  tierName: string;
  buttonType: "dark" | "light";
  tierPerks: {
    value: string;
    included: boolean;
  }[];
};

export const TierCard = ({ price, tierName, buttonType, tierPerks }: Props) => {
  return (
    <div className="text-black border flex flex-col px-10 gap-[20px]">
      <p>{tierName}</p>
      <p>{price} / month</p>
      {tierPerks.map(
        ({ included, value }: { included: boolean; value: string }) => (
          <p className="capitalize" key={value}>
            {value}
          </p>
        )
      )}
      {buttonType === "dark" ? (
        <button>Start Free Trial</button>
      ) : (
        <button>Start Free Trial</button>
      )}

      <p className="no credit card required."> no credit card required</p>
    </div>
  );
};
