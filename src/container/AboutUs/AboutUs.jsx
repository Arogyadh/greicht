import React, { useEffect, useRef } from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import gsap from "gsap";

const AboutUs = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const rotateImage = () => {
      gsap.to(imageElement, {
        rotation: "+=360",
        duration: 2,
        ease: "linear",
      });
    };
    const rotationInterval = setInterval(rotateImage, 5000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div
      className="app__aboutsus app__bg flex__center section__padding"
      id="About"
    >
      <div className="app__aboutus-overlay flex__center">
        <img ref={imageRef} src={images.G} alt="G letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Revel in our story of passion and culinary artistry. A journey that
            encapsulates exquisite tastes, creative innovation, and an
            experience designed to delight the senses. Immerse yourself in a
            world where flavors tell tales and dining is an art.
          </p>
          <button type="button" className="custom__button">
            Read More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" className="knife__img" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Our history is woven with the essence of rich culinary heritage and
            a tradition of excellence. Uncover the timeline that narrates our
            journey of exceptional hospitality, culinary expertise, and the
            seamless blending of tradition with innovation.
          </p>
          <button type="button" className="custom__button">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
