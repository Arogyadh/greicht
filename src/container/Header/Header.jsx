import React, { useEffect, useRef } from "react";
import { images } from "../../constants";
import { gsap } from "gsap";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => {
  const headerRef = React.useRef(null);
  const headRef = useRef([]);

  useEffect(() => {
    const headerElement = headerRef.current;
    const headElements = headRef.current;

    gsap.from(headerElement, {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });

    gsap.from(headElements, {
      duration: 3,
      opacity: 0,
      y: -50,
      ease: "power2.inOut",
      stagger: 0.2,
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
        <h1 className="app__header-h1">
          <span>The</span>
          <span ref={(el) => (headRef.current[0] = el)}> key</span>
          <span ref={(el) => (headRef.current[1] = el)}> to</span>
          <span ref={(el) => (headRef.current[2] = el)}> fine</span>
          <span ref={(el) => (headRef.current[3] = el)}> Dining</span>
        </h1>
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
