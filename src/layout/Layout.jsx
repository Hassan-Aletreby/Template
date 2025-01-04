import NavBar from "./Navbar/NavBar";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import  {Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <>
        <NavBar />
        <SideBar />
        <Outlet />
        <Footer />
        </>
    )
}