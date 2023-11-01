import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants";
import gsap from "gsap";
import "./IntroAnim.css";

const IntroAnim = () => {
  const imageRef = useRef(null);
  const [zIndex, setZIndex] = useState(9999);

  useEffect(() => {
    const introAnimation = () => {
      const imageElement = imageRef.current;
      const overlay = imageElement.parentElement;

      gsap.fromTo(imageElement, { opacity: 0 }, { opacity: 1, duration: 2 });
      gsap.to(imageElement, { opacity: 0, duration: 2, delay: 1 });

      gsap.to(overlay, {
        opacity: 0,
        duration: 2,
        delay: 1,
        onComplete: () => {
          setZIndex(-100);
        },
      });
    };

    introAnimation();
  }, []);

  return (
    <div className="intro-overlay" style={{ zIndex: zIndex }}>
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
