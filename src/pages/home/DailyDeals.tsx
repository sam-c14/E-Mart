import React, { useEffect, FC } from "react";
import HeaderComp from "../../components/other/HeaderComp";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Deal2 from "../../assets/images/Deal2.webp";
import { FaStar } from "react-icons/fa";

export default function DailyDeals() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  return (
    <div>
      <div>
        <HeaderComp htmlEle={header} headerText={"Daily Deals"} />
      </div>
      <div className="lg:px-10 md:px-10 px-0 grid md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-4">
        {arr.map((item) => (
          <Card
            className="shadow-sm hover:shadow-xl transition-105 text-orange-500"
            sx={{ maxWidth: 320, paddingBottom: 1 }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                  E
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="E-Mart Online Stores"
              subheader="Imported Product"
            />
            <div className="h-36 px-10">
              <img className="h-full w-full" src={Deal2} alt="Theatre System" />
            </div>
            <CardContent>
              <h3 className="font-bold">Djack Home Theater System</h3>
              <h1 className="font-bold text-2xl mt-3">#34,000</h1>
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
              <button className="text-pink-600 rounded-sm bg-transparent py-2 mt-3 border-2  hover:text-white transition-5 border-pink-600 hover:bg-pink-600 text-center font-bold w-11/12 ">
                Add To Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
