import React from "react";
import Constructor from "../../assets/images/Constructor.jpg";
import StoreLogo from "../../components/other/StoreLogo";

const Construction = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex h-1/2 justify-evenly">
        <div className="pt-24">
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
        <div className="w-1/3 h-11/12">
          <img className="w-full h-full" src={Constructor} alt="Maintenance" />
        </div>
      </div>
    </div>
  );
};

export default Construction;
