import { useEffect } from "react";
import LinksHeader from "../../components/home/nav/LinksHeader";
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
import { getProducts as fetchCurProducts } from "../../store/asyncFns/postData";
import { logout } from "../../store/asyncFns/postData";

const Home = () => {
  const dispatch = useAppDispatch();
  const { logoutStatus } = useParams();
  const handleLogout = async () => {
    await dispatch(logout);
  };
  const sponsoredProducts = useAppSelector(
    (state: any) => state.productReducer.sponsoredProducts
  );
  const getProducts = async () => {
    await dispatch(fetchCurProducts);
    await dispatch(setProductTag("sponsored"));
    await dispatch(getReservedProducts);
  };

  const sliceProducts = useAppSelector(
    (state) => state.productReducer.products
  );

  useEffect(() => {
    getProducts();
    if (logoutStatus) {
      handleLogout();
    }
  }, [logoutStatus]);

  return (
    <div>
      <LinksHeader />
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
  );
};

export default Home;
