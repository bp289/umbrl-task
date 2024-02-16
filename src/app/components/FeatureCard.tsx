import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const FeatureCard = ({ title, icon, children }: Props) => {
  return (
    <div>
      <p>{icon}</p>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};
