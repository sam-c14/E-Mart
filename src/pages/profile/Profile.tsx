import { useEffect, useState } from "react";
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
import { getUser } from "../../store/asyncFns/postData";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

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
    await dispatch(getUser);
  };

  const user = useAppSelector((state) => state.userReducer.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updateUserDetails = () => {
    console.log(firstName, lastName);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

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
              {/* <div className="flex items-center gap-2">
                <Checkbox id="agree" />
              </div> */}
              <Button type="submit">Save Changes</Button>
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
