import { Outlet } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SplashCursor from "../../components/splashCursor";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SplashCursor />
      <Footer />
    </>
  );
};
export default RootLayout;
