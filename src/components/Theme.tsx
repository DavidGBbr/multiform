import React from "react";
import Header from "./Header";

const Theme = ({ children }: React.PropsWithChildren) => {
  return (
    <div id="container" className="bg-[#02044A] text-white min-h-screen">
      <div
        id="area"
        className="m-auto max-w-[980px] min-h-screen flex flex-col"
      >
        <Header />

        <div id="steps" className="flex flex-1">
          <div
            id="sidebar"
            className="w-64 border-r border-solid border-[#16195C]"
          >
            ...
          </div>
          <div id="page" className="flex-1 pl-10 pt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
