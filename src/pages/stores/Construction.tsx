import React from "react";
import Constructor from "../../assets/images/Constructor.jpg";
import StoreLogo from "../../components/other/StoreLogo";
import { useAppSelector } from "../../store/hooks/hooks";
import { history } from "../../utilities/routerFns";
import { FaArrowLeft } from "react-icons/fa";

const Construction = () => {
  const returnUrl = useAppSelector((state) => state.authReducer.returnUrl);
  const goBack = () => {
    if (returnUrl) history.navigate(returnUrl);
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex h-1/2 flex-wrap sm:flex-nowrap md:justify-between lg:justify-evenly">
        <div className="pt-24 sm:block flex justify-center flex-wrap sm:w-auto w-full">
          <button
            onClick={goBack}
            className="border-2 border-pink-500 transition-all hover:text-white hover:bg-pink-500 text-pink-500 flex justify-between items-center font-semibold py-1 rounded-md px-3 mb-4"
          >
            <FaArrowLeft className="text-xs" />
            Back
          </button>
          <div>
            <StoreLogo />
          </div>
          <div>
            <h3 className="text-gray-600 w-9/12 font-bold text-2xl ">
              We are undergoing a bit of scheduled maintenance
            </h3>
          </div>
          <div>
            <p className="text-gray-700 mt-2 w-9/12 text-sm">
              Sorry for the inconvenience.We will be back up and running as fast
              as possible.
            </p>
          </div>
        </div>
        <div className="sm:w-1/3 sm:block flex justify-center h-11/12 w-full">
          <img className="w-full h-full" src={Constructor} alt="Maintenance" />
        </div>
      </div>
    </div>
  );
};

export default Construction;
