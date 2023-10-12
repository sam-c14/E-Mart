import { useEffect, useState } from "react";
import LinksHeader from "../../components/home/nav/LinksHeader";
// import XLogo from
import Navbar from "../../components/home/nav/Navbar";
import Categories from "../../components/home/nav/Categories";
import Slider from "../../components/home/Slider";
import ProductGrid from "../../components/home/ProductGrid";
import CurrentDeals from "../../components/home/CurrentDeals";
import SponsoredProducts from "../../components/home/SponsoredProducts";
import Recommended from "../../components/home/Recommended";
import ShopNow from "../../components/home/ShopNow";
import AboutUs from "../../components/home/AboutUs";
import Footer from "../../components/home/Footer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
// import { reduxFns } from "../../utilities/reduxFns";
import { getReservedProducts } from "../../store/asyncFns/postData";
import { setProductTag } from "../../store/slices/productSlice";
import { CircularProgress } from "@mui/material";
import { getProducts as fetchCurProducts } from "../../store/asyncFns/postData";
import { logout } from "../../store/asyncFns/postData";
// import * as notify from "notifyjs";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { history } from "../../utilities/routerFns";

const Home = () => {
  const dispatch = useAppDispatch();
  const { logoutStatus } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const handleLogout = async () => {
    await dispatch(logout);
  };
  const sponsoredProducts = useAppSelector(
    (state: any) => state.productReducer.sponsoredProducts
  );
  const getProducts = async () => {
    // await setLoading(true);
    try {
      await dispatch(fetchCurProducts);
      await dispatch(setProductTag("sponsored"));
      await dispatch(getReservedProducts);
      setTimeout(() => showProductsFetchedSuccessAlert(), 1000);
    } catch (error) {
      showAlert();
    }
    await setLoading(false);
  };

  const sliceProducts = useAppSelector(
    (state) => state.productReducer.products
  );

  const showProductsFetchedSuccessAlert = () => {
    toast.success("Products Fetched Successfully");
  };

  const user = localStorage.getItem("user");

  const showAlert = () => {
    //  Swal.fire({
    //    icon: "",
    //    title: "Oops...",
    //    text: "Something went wrong!",
    //    footer: '<a href="">Why do I have this issue?</a>',
    //  });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Was unable to fetch products, Kindly refresh and try again!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  useEffect(() => {
    // notify.requestPermission();
    getProducts();
    // if (logoutStatus && user?.length !== 0) {
    //   handleLogout();
    // } else {
    //   if (document.location.href !== "/") history.navigate("/");
    // }
  }, []);

  return loading ? (
    <div className="grid h-screen place-items-center">
      <CircularProgress />
    </div>
  ) : (
    <>
      <div>
        <LinksHeader />
        {/* <button onClick={showAlert}>Show Alert</button> */}
        <Navbar />
        {/* <Categories /> */}
        <div className="flex lg:flex-nowrap flex-wrap lg:justify-between md:mt-3 sm:mt-auto mt-20 my-4 lg:px-8 md:px-6 px-1">
          <Slider />
          <ProductGrid />
        </div>
        <div className="lg:px-8 md:px-6 px-1">
          {sliceProducts.length !== 0 ? (
            <CurrentDeals product={sliceProducts.slice(0, 6)} />
          ) : (
            ""
          )}
          {sponsoredProducts.length !== 0 ? <SponsoredProducts /> : ""}
          <Recommended />
          <ShopNow />
          <AboutUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
