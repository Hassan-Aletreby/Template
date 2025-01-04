import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import SideBar from '../SideBar/SideBar'; 

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav>
        <div className="content">
          <div className="logo"> 
            <div className="logo__img">
              <img src="../../assets/images/logo.png" alt="logo" />
            </div>
            <div className="logo__title">
              <p>Template</p>
            </div>
          </div>

         

          <ul className="menu">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/service"}>Services</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </ul>

          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
           <div className="hamburger" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>

      <SideBar isOpen={isSidebarOpen} />
    </>
  );
}
