import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import gsap from "gsap";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const navElement = navRef.current;
    const logoElement = logoRef.current;
    const linksElements = linksRef.current;

    gsap.from(navElement, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power2.inOut",
    });

    gsap.from(logoElement, {
      duration: 3,
      opacity: 0,
      x: -50,
      ease: "power2.inOut",
    });

    gsap.from(linksElements, {
      duration: 2,
      opacity: 0,
      y: -50,
      ease: "power2.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="navbar-container">
      <div className="black-overlay" />
      <nav className="app__navbar" ref={navRef}>
        <div className="app__navbar-logo">
          <a href="/">
            <img ref={logoRef} src={images.gericht} alt="app logo" />
          </a>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans" ref={(el) => (linksRef.current[0] = el)}>
            <a href="#Home">Home</a>
          </li>
          <li className="p__opensans" ref={(el) => (linksRef.current[1] = el)}>
            <a href="#About">About</a>
          </li>
          <li className="p__opensans" ref={(el) => (linksRef.current[2] = el)}>
            <a href="#Menu">Menu</a>
          </li>
          <li className="p__opensans" ref={(el) => (linksRef.current[3] = el)}>
            <a href="#Awards">Awards</a>
          </li>
          <li className="p__opensans" ref={(el) => (linksRef.current[4] = el)}>
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#Login" className="p__opensans">
            Log In/Register
          </a>
          <div />
          <a href="/" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex_center  slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a href="#Home">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="#About">About</a>
                </li>
                <li className="p__opensans">
                  <a href="#Menu">Menu</a>
                </li>
                <li className="p__opensans">
                  <a href="#Awards">Awards</a>
                </li>
                <li className="p__opensans">
                  <a href="#Contacts">Contacts</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
