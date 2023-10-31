import React, { useEffect, useRef } from "react";
import { images } from "../../constants";
import gsap from "gsap";
import "./IntroAnim.css"; // Consider creating a CSS file for styles

const IntroAnim = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const introAnimation = () => {
      const imageElement = imageRef.current;
      const overlay = imageElement.parentElement;

      gsap.fromTo(imageElement, { opacity: 0 }, { opacity: 1, duration: 2 });
      gsap.to(imageElement, { opacity: 0, duration: 2, delay: 1 });

      gsap.to(overlay, { opacity: 0, duration: 2, delay: 1 });
    };

    introAnimation();
  }, []);

  return (
    <div className="intro-overlay">
      <img
        ref={imageRef}
        src={images.G}
        alt="G letter"
        className="intro-image"
      />
    </div>
  );
};

export default IntroAnim;
