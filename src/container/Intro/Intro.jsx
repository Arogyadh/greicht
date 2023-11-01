import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal, images } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (!playVideo) {
      vidRef.current.play().catch((error) => {
        // Handle play error, if required
        console.error("Video playback error:", error);
      });
    } else {
      vidRef.current.pause();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        playsInline
        controls={false}
        muted
        preload="auto"
        poster={images.logo}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
