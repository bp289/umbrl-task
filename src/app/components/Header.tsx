import React from "react";

type Props = {};

const navList: string[] = ["Demos", "Pages", "Support", "Contact"];

const Header = (props: Props) => {
  return (
    <header className="bg-white w-full h-[3rem] ">
      mt-10
      <div className="flex justify-between items-center mx-20 mt-2">
        <h1 className="text-black text-xl font-bold">Brainwave.io</h1>
        <div>
          {navList.map((item) => {
            return (
              <a key={item} className="text-black ml-10 " href={`/${item}`}>
                {item}
              </a>
            );
          })}
          <a className="text-black ml-10 " href={`/SignIn`}>
            Sign In
          </a>

          <a
            className=" ml-10 rounded bg-[#473BF0] px-5 py-3 "
            href={`/SignIn`}>
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
