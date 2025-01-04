import "./SideBar.scss";
import { NavLink } from "react-router-dom";

export default function SideBar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <h1>Logo</h1>
            </div>
            <ul className="sidebar-menu">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/service"}>Services</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
            </ul>
        </div>
    );
}
