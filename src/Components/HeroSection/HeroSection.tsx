import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <>
      <section className="section1">
        <img className="bg" src={"/public/images/background.png"} alt="" />
        {/* Header  */}
        <div className="header">
          <img
            className="leftLogo"
            src={"/public/images/LeftLogo.png"}
            alt=""
          />
          <img className="leftLogo" src={"/public/images/Home.png"} alt="" />
          <img
            style={{ width: "30px", height: "30px" }}
            className="leftLogo"
            src={"/public/images/navigation.png"}
            alt=""
          />
        </div>
        {/* PolyGon */}
        <div className="position">
          <img
            className="polygons"
            src={"/public/images/Polygons.png"}
            alt=""
          />
          <img
            className="cyberpunk"
            src={"/public/images/cyberpunk-2077-logo.png"}
            alt=""
          />
          <img className="playBtn" src={"/public/images/play btn.png"} alt="" />
          <img className="availableNow" src={"/public/images/btn.png"} alt="" />
        </div>
        {/* Character  */}
        <div className="position">
          <img
            className="character"
            src={"/public/images/character.png"}
            alt=""
          />
        </div>
      </section>
      <section className="section2">
        <img src={"/public/images/section seperator.png"} alt="" />
        <img src={"/public/images/bg elements.png"} alt="" />
        <h1
          className="welcome"
          style={{
            position: "absolute",
            top: 0,
            textTransform: "uppercase",
            color: "black",
          }}
        >
          Welcome to Night City
        </h1>
        <img className="text" src={"/public/images/text.png"} alt="" />
        <img className="frame3" src={"/public/images/Frame 3.png"} alt="" />
        <img
          className="seperator2"
          src={"/public/images/seperator2.png"}
          alt=""
        />
      </section>
    </>
  );
};

export default HeroSection;
