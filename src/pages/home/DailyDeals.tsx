import React, { useEffect, FC } from "react";
import HeaderComp from "../../components/other/HeaderComp";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addToCart } from "../../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Deal2 from "../../assets/images/Deal2.webp";
import products from "../../assets/data/products.json";
import { T } from "../../store/slices/cartSlice";

export default function DailyDeals() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.cartItems);
  const header = (
    <p>
      Home {">"}{" "}
      <span className="text-pink-800 font-semibold">Daily Deals</span>
    </p>
  );
  let favItems: Array<String> = [];
  const favIcons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".fav-icon");
  favIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      console.log(e);
      if (icon.classList.contains("text-orange-500")) {
        icon.classList.remove("text-orange-500");
        favItems =
          favItems.length !== 0 ? favItems.filter((id) => id !== icon.id) : [];
      } else {
        icon.style.color = "!important rgb(249 115 22, 1);";
        // icon.classList.add("text-orange-500");
        console.log(icon.classList);
        favItems.push(icon.id);
      }
    });
  });

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    items: T
  ) => {
    console.log(items);
    await dispatch(addToCart(items));
    console.log(cartItems);
  };

  return (
    <div className="mb-2 sm:mt-auto mt-12">
      <div>
        <HeaderComp htmlEle={header} headerText={"Daily Deals"} />
      </div>
      <div className="lg:px-10 md:px-10 px-0 sm:grid md:grid-cols-2 xl:grid-cols-5 flex flex-wrap justify-center lg:grid-cols-3 gap-y-4 gap-x-4">
        {products.products.map((item, index) => (
          <Card
            key={index}
            className="shadow-sm hover:shadow-xl transition-105 text-orange-500"
            sx={{ maxWidth: 320, paddingBottom: 1 }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                  {item.vendor[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.vendor}
              subheader="Imported Product"
            />
            <div className="h-36 px-10">
              <img className="h-full w-full" src={Deal2} alt={item.name} />
            </div>
            <CardContent>
              <h3 className="font-bold">{item.name}</h3>
              <h1 className="font-bold text-2xl mt-3">₦{item.price}</h1>
              <p className="text-xs mt-1 text-gray-500">
                Click Here for Seller's Details
              </p>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon id={item.toString()} className="fav-icon" />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <div className="w-full flex justify-center">
              <button
                onClick={(e) =>
                  handleAddToCart(e, {
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    quantity: 1,
                  })
                }
                className="text-pink-600 rounded-sm bg-transparent py-2 mt-3 border-2  hover:text-white transition-5 border-pink-600 hover:bg-pink-600 text-center font-bold w-11/12 "
              >
                Add To Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
