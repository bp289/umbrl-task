import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

export const TextSection = ({ children }: Props) => {
  return <div className="text-black text-sm font-light">{children}</div>;
};
