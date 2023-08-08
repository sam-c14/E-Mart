import { FC, useEffect } from "react";
import { categories } from "./Categories";
import { LiaAngleRightSolid } from "react-icons/lia";

interface mobileNavProps {
  isOpen: boolean;
}

const MobileNav: FC<mobileNavProps> = ({ isOpen }): JSX.Element => {
  return (
    <div
      className={
        isOpen
          ? "sm:hidden block h-screen absolute top-14 px-5 pt-4 transition-5 overflow-auto no-sidebar left-0 w-full z-20 bg-white"
          : "sm:hidden block h-screen absolute top-14 px-5 pt-4 transition-5 -left-full w-full z-20 bg-white"
      }
    >
      <div className="grid">
        <div className="flex justify-between gap-5">
          <button className="text-pink-500 border border-pink-500 rounded-sm bg-white hover:bg-pink-600 py-2 text-center font-semibold mt-1 w-full text-sm">
            Login
          </button>
          <button className="text-pink-500 border border-pink-500 rounded-sm bg-white hover:bg-pink-600 py-2 text-center font-semibold mt-1 w-full text-sm">
            SignUp
          </button>
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-sm py-2">Categories</h1>
          <ul className="my-2">
            {categories.map((category) => (
              <li className="flex justify-between border-t border-s-0 border-e-0 text-sm border-b py-4">
                <span>{category}</span>
                <LiaAngleRightSolid />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
