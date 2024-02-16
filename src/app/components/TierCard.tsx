import React from "react";

type Props = {
  price: number;
  tierName: string;
  buttonType: "dark" | "light";
  tierPerks: [{ included: boolean; value: string }];
};

export const TierCard = ({ price, tierName, buttonType, tierPerks }: Props) => {
  return (
    <div>
      <p>{tierName}</p>
      <p>{price} / month</p>
      {tierPerks.map(
        ({ included, value }: { included: boolean; value: string }) => (
          <p key={value}>{value}</p>
        )
      )}
      {buttonType === "dark" ? (
        <button>dark button</button>
      ) : (
        <button>light button</button>
      )}

      <p>no credit card required</p>
    </div>
  );
};
