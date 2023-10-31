import React, { useEffect, useRef } from "react";
import { images } from "../../constants";
import { gsap } from "gsap";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => {
  const headerRef = React.useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    gsap.from(headerElement, {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={headerRef}
      className="app__header app__wrapper section__padding "
      id="Home"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Explore a perfect fusion of flavors, textures, and passion. Indulge in
          our culinary artistry that crafts unforgettable dining experiences.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" className="header__img" />
      </div>
    </div>
  );
};

export default Header;
