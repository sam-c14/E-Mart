import React, { FC } from "react";
import { ReactElement } from "react";

interface headerProps {
  htmlEle: ReactElement<any, any>;
  headerText: String;
}

const HeaderComp: FC<headerProps> = ({ htmlEle, headerText }): JSX.Element => {
  return (
    <div className="py-5 pl-10 xl:pl-20 bg-white shadow-sm border-b mb-5">
      <div className="text-sm mb-3">{htmlEle}</div>
      <div>
        <h1 className="font-bold mt-3 text-4xl">{headerText}</h1>
      </div>
    </div>
  );
};

export default HeaderComp;
