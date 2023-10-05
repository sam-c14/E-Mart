import React, { useEffect, useState } from "react";
import LinksHeader from "../../components/home/nav/LinksHeader";
import Navbar from "../../components/home/nav/Navbar";
import Categories from "../../components/home/nav/Categories";
import Footer from "../../components/home/Footer";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsBagDash } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { LiaUserTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { CircularProgress } from "@mui/material";
import { getUser, updateUser } from "../../store/asyncFns/postData";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { reduxFns } from "../../utilities/reduxFns";
import { setUserForm } from "../../store/slices/userSlice";
import bcrypt from "bcryptjs";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

interface linkObjType {
  title: string;
  icon: any;
  links: Array<any>;
}

type accountLinkType = Array<linkObjType>;

const Profile = () => {
  const dispatch = useAppDispatch();

  const accountLinks: accountLinkType = [
    {
      title: "My Profile",
      icon: <BiSolidUserCircle className="text-4xl" />,
      links: [
        {
          text: "account information",
          url: "",
        },
        {
          text: "delivery address",
          url: "delivery-addresses",
        },
      ],
    },
    {
      title: "My Orders",
      icon: <BsBagDash className="text-4xl" />,
      links: [
        {
          text: "order history",
          url: "account/orders",
        },
        {
          text: "pending ratings",
          url: "pending-ratings",
        },
      ],
    },
    {
      title: "My Wallet",
      icon: <BsWallet2 className="text-3xl" />,
      links: [
        {
          text: "wallet",
          url: "wallet",
        },
      ],
    },
    {
      title: "Delete Account",
      icon: <LiaUserTimesSolid className="text-4xl" />,
      links: [
        {
          text: "delete account",
          url: "delete-account",
        },
      ],
    },
  ];

  const getUserDetails = async () => {
    await setLoad(true);
    await dispatch(getUser);
    // set parameters
    const user = reduxFns.selector.user;
    await setUserId(user._id);
    // console.log(user);
    await setFirstName(user.firstName);
    await setLastName(user.lastName);
    await setEmail(user.email);
    await setPassword(user.password);
    //
    await setLoad(false);
    // console.log(user, "ss");
  };

  // const user = useAppSelector((state) => state.userReducer.user);

  const [firstName, setFirstName] = useState("");
  const [userId, setUserId] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  const updateUserDetails = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      // console.log("Here");
      setErrorMsg(true);

      setTimeout(() => {
        setErrorMsg(false);
      }, 3000);
      return;
    }
    await setPassword(bcrypt.hashSync(newPassword, 8));
    const userObj = {
      _id: userId,
      firstName,
      lastName,
      email,
      password,
    };
    setIsSubmitted(true);
    await dispatch(setUserForm(userObj));
    await dispatch(updateUser);
    setIsSubmitted(false);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (load) {
    return (
      <div className="grid h-screen place-items-center">
        <CircularProgress />
        {/* <div>Please wait while the product is being added</div> */}
      </div>
    );
  }

  // if (errorMsg) {
  //   {
  //     console.log("Got Here");
  //   }

  // }

  return (
    <div>
      <LinksHeader />
      <Navbar />
      <Categories />

      <div className="py-5 pl-10 xl:pl-20 bg-white shadow-sm border-b mb-3">
        <div className="text-sm">
          Home {">"} My Account {">"}{" "}
          <span className="text-pink-800">My Profile</span>
        </div>
        <div>
          <h1 className="font-bold text-4xl">Account Information</h1>
        </div>
      </div>
      {/* body start */}
      <div className="flex gap-5 my-5 justify-center">
        <div style={{ maxHeight: "550px" }} className="bg-white rounded w-1/5">
          <ul className="pt-2 px-2">
            {accountLinks.map((link, index) => (
              <li
                key={index}
                className={
                  link.title !== "Delete Account"
                    ? "flex gap-4 ps-3 py-4 border-b"
                    : "flex gap-4 ps-3 py-4"
                }
              >
                <div>{link.icon}</div>
                <div>
                  <h2 className="font-semibold mb-2">{link.title}</h2>
                  {link.links.map((val, index) => (
                    <Link
                      key={index}
                      to={val.url}
                      className="capitalize mb-3 text-sm block"
                    >
                      {val.text}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white py-3 pb-5 rounded w-1/2">
          <div className="py-2.5 px-10 border-b">
            <h1 className="font-bold text-xl pb-2">Account Information</h1>
          </div>
          <div className="mt-2">
            <form
              onSubmit={updateUserDetails}
              className="flex px-10 flex-col gap-4"
            >
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First Name" />
                </div>
                <TextInput
                  id="firstName"
                  placeholder="Enter Your First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last Name" />
                </div>
                <TextInput
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                  id="email2"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password2"
                  required
                  type="password"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="new-password" value="New password" />
                </div>
                <TextInput
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  id="new-password"
                  required
                  type="password"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="confirm-password" value="Confirm password" />
                </div>
                <TextInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirm-password"
                  required
                  type="password"
                />
              </div>
              {errorMsg ? (
                <>
                  <div className="text-red-600 my-2">
                    The two passwords don't match, please check and try again
                  </div>
                </>
              ) : (
                <div></div>
              )}
              <button
                disabled={isSubmitted}
                type="submit"
                className="py-3 w-full text-sm bg-green-600 hover:bg-green-500 rounded-md transition-all text-white"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* body end */}
      <Footer />
    </div>
  );
};

export default Profile;
