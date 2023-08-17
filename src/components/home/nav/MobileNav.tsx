import { FC } from "react";
import { categories } from "./Categories";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
interface mobileNavProps {
  isOpen: boolean;
}

const MobileNav: FC<mobileNavProps> = ({ isOpen }): JSX.Element => {
  return (
    <div
      className={
        isOpen
          ? "lg:hidden block h-screen fixed top-14 px-5 pt-4 transition-5 overflow-auto no-sidebar left-0 w-full z-30 bg-white"
          : "lg:hidden block h-screen fixed top-14 px-5 pt-4 transition-5 -left-full w-full z-20 bg-white"
      }
    >
      <div className="grid">
        <div className="flex justify-between gap-5">
          <button className="text-pink-500 border border-pink-500 rounded-sm bg-white py-2 text-center font-semibold mt-1 w-full text-sm">
            <Link className="w-full" to="/account/login">
              Login
            </Link>
          </button>
          <button className="text-pink-500 border border-pink-500 rounded-sm bg-white py-2 text-center font-semibold mt-1 w-full text-sm">
            <Link className="w-full" to="/account/signup">
              Signup
            </Link>
          </button>
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-sm py-2">Categories</h1>
          <ul className="my-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex justify-between border-t border-s-0 border-e-0 text-sm border-b py-4"
              >
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
