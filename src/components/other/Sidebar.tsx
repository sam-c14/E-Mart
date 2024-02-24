import React, { FC, useRef, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import NaijaStates from "naija-state-local-government";
import { FormEvent } from "react";
import { CheckoutT } from "../../store/slices/userSlice";

interface Lgas {
  lgas: Array<string>;
  senatorial_districts: Array<string>;
  state: string;
}

function Sidebar(props: any): JSX.Element {
  const barRef = useRef(null);
  const nigerianStates = NaijaStates.states();
  const initialLga = {
    lgas: [],
    senatorial_districts: [],
    state: "",
  };
  const initialCheckoutForm = {
    first_name: "",
    last_name: "",
    phone_number: "",
    street_address: "",
    state: "",
    lga: "",
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState<Lgas>(initialLga);
  const [checkoutForm, setCheckoutForm] =
    useState<CheckoutT>(initialCheckoutForm);

  function handleCloseSidebar() {
    props.setIsSideBarOpen();
  }

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {};

  return props.isSidebarOpen ? (
    <div className="h-screen fixed top-0 w-full flex justify-between">
      <div
        className="xl:w-3/4 lg:w-3/5 md:w-2/5 md:block hidden h-full bg-black bg-opacity-70"
        onClick={handleCloseSidebar}
      ></div>
      <div
        ref={barRef}
        className="xl:w-1/4 lg:w-2/5 md:w-3/5 w-full h-full overflow-auto bg-white py-4"
      >
        <div className="py-4 w-1/2 flex items-center gap-16 fixed bg-white shadow-md bg-opacity-100 px-7 pr-16 ">
          <h6 className="font-bold text-2xl">Address Form</h6>
          <button
            onClick={handleCloseSidebar}
            className="border border-gray-400 text-gray-400 text-sm rounded-md flex gap-1 mb-3"
          >
            <span>
              <ClearIcon className="text-gray-400" />
            </span>
            <span>Close</span>
          </button>
        </div>
        <form
          onSubmit={(e) => handleFormSubmission(e)}
          className="mt-24 px-7"
          action=""
        >
          <div className="flex gap-5 mt-3 items-center">
            <span className="w-1/2">
              <label className="inline-block mb-3" htmlFor="first-name">
                First Name
              </label>
              <input
                type="text"
                required
                onChange={(e) => {
                  setCheckoutForm((previousState) => {
                    return {
                      ...previousState,
                      first_name: e.target?.value,
                    };
                  });
                  //   console.log(checkoutForm.first_name);
                }}
                placeholder="First Name"
                className="w-full py-3 test-input focus:ring-black"
              />
            </span>
            <span className="w-1/2">
              <label className="inline-block mb-3" htmlFor="last-name">
                Last Name
              </label>
              <input
                type="text"
                required
                onChange={(e) => {
                  setCheckoutForm((previousState) => {
                    return {
                      ...previousState,
                      last_name: e.target?.value,
                    };
                  });
                }}
                placeholder="Last Name"
                className="w-full py-3 test-input focus:ring-black"
              />
            </span>
          </div>
          <div className="w-full mt-5">
            <label className="inline-block mb-3" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              type="text"
              required
              onChange={(e) => {
                setCheckoutForm((previousState) => {
                  return {
                    ...previousState,
                    phone_number: e.target?.value,
                  };
                });
              }}
              placeholder="Phone Number"
              className="w-full py-3 test-input focus:ring-black"
              id="phone-number"
            />
          </div>
          <div className="w-full mt-5">
            <label className="inline-block mb-3" htmlFor="delivery-address">
              Street Address
            </label>
            <input
              type="text"
              required
              value={checkoutForm.street_address}
              onChange={(e) => {
                checkoutForm.street_address = e.target.value;
              }}
              placeholder="Enter delivery address"
              className="w-full py-3 test-input focus:ring-black"
              id="delivery-address"
            />
          </div>
          <div className="w-full mt-5">
            <label className="inline-block mb-3" htmlFor="directions">
              Directions (Optional)
            </label>
            <input
              type="text"
              placeholder="Directions"
              className="w-full py-3 test-input focus:ring-black"
              id="directions"
            />
          </div>
          <div className="w-full mt-5">
            <label className="inline-block mb-3" htmlFor="city">
              <span>State</span>
              <span className="ml-4 text-red-600">*</span>
            </label>
            <div>
              <select
                className="w-full"
                name="nigerian-states"
                required
                id="nigerian-states-dropdown"
                onChange={(e) => {
                  setSelectedState(e.target?.value);
                  setSelectedLga(NaijaStates.lgas(e.target?.value));
                  setCheckoutForm((previousState) => {
                    return {
                      ...previousState,
                      street_address: e.target?.value,
                    };
                  });
                }}
              >
                {nigerianStates.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full mt-5">
            <label className="inline-block mb-3" htmlFor="lga-dropdown">
              <span>LGA(Local Govt. Area)</span>
              <span className="ml-4 text-red-600">*</span>
            </label>
            <div>
              <select
                className="w-full"
                required
                title="Lga of you current residential state"
                disabled={selectedState.length === 0 ? true : false}
                onChange={(e) => {
                  setCheckoutForm((previousState) => {
                    return { ...previousState, lga: e.target?.value };
                  });
                }}
                name="nigerian-lgas"
                id="lga-dropdown"
              >
                {selectedLga.lgas.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-green-500 transition-all hover:bg-pink-500 py-3 text-white w-full my-2 font-bold rounded-md"
            >
              Continue
            </button>
            <button
              type="submit"
              className="bg-white border border-pink-500 hover:bg-pink-500 hover:text-white transition-all text-pink-500 py-3 w-full my-2 font-bold rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <span></span>
  );
}

// Sidebar.propTypes = {
//     isSideBarOpen : boolean,
//     setIsSideBarOpen : Function,
// }
export default Sidebar;
