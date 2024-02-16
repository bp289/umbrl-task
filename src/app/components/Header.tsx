import React from "react";

type Props = {};

const navList: string[] = ["demos", "pages", "support", "contact"];

const Header = (props: Props) => {
  return (
    <header className="bg-white w-full h-[3rem] ">
      <div className="flex justify-between items-center mx-20">
        <h1 className="text-black">Brainwave.io</h1>
        <div>
          {navList.map((item) => {
            return (
              <a key={item} className="text-black ml-10" href={`/${item}`}>
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
