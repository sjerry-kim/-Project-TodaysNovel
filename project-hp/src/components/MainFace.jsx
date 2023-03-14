import React, { useRef } from "react";
import Slider from "react-slick";
import "../css/MainFace.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const MainFace = () => {
  const [play, setPlay] = useState(true);
  const slickRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300,
    fade: true,
    pauseOnHover: false
  };

  return (
    <div className="MainFace-wp">
      <Slider ref={slickRef} {...settings}>
        <div>
          <img src={require("../img/mainface01.jpg")} alt="" />
        </div>
        <div>
          <img src={require("../img/mainface02.jpg")} alt="" />
        </div>
      </Slider>
      <div className="MainFace-btn-div">
        {
          play? (
            <button onClick={()=>{
              setPlay(!play);
              slickRef.current.slickPause()
              }}>
              <FontAwesomeIcon icon={faPause}/>
            </button>
          ):(
            <button onClick={()=>{
              setPlay(!play);
              slickRef.current.slickPlay()
              }}>
              <FontAwesomeIcon icon={faPlay}/>
            </button>
          )
        }
      </div>
    </div>
  );
};

export default MainFace;
