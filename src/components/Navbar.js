import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import AnchorLink from "react-anchor-link-smooth-scroll";

import useMediaQuery from "../hooks/useMediaQuery";

function Navbar({ isTopOfPage }) {
  const [isMenuToggled, setisMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-white";
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className={` ${navbarBackground} z-40 w-full fixed top-0 md:py-3`}>
      <nav className="flex items-center justify-between mx-auto w-5/6">
        <div className="md:text-[35px] font-bold">
          <span className="text-green">Agri</span>Link
        </div>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-10 font-opensans text-sm font-semibold">
            <NavLink to="/">Home</NavLink>
            <AnchorLink href="#aboutus">About Us</AnchorLink>
            <AnchorLink href="#contactus">Contact Us</AnchorLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink
              to="/dashboard"
              style={{
                color: "#fff",
                padding: "13px 25px",
                borderRadius: "10px",
                background: "#008000",
                marginTop: "-12px",
              }}
            >
              Get Started
            </NavLink>
          </div>
        ) : (
          <button onClick={() => setisMenuToggled(!isMenuToggled)}>
            <HiMenuAlt3 size={35} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-green w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setisMenuToggled(!isMenuToggled)}>
                <HiOutlineX size={35} />
              </button>
            </div>

            <div
              style={{ fontSize: "18.06px" }}
              className="flex flex-col gap-10 ml-[33%] text-white scale-up-center"
            >
              <NavLink to="/">Home</NavLink>
              <AnchorLink href="#aboutus">About Us</AnchorLink>
              <AnchorLink href="#contactus">Contact Us</AnchorLink>
              <NavLink to="/signin">Sign In</NavLink>
              <div>
                <NavLink
                  to="/dashboard"
                  className="text-black md:px-[20px] md:py-[15px] px-[15px] py-[10px] rounded-[10px] bg-white"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
