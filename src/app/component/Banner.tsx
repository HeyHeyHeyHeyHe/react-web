import React from "react";

function Banner() {
  return (
    <section id="Banner">
    <div
      className="banner"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF8E1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        fontSize:"1.5rem",
        
      }}
    >
      <div className="banner-left" style={{flex:3, display:"flex",justifyContent:'center'}}>
        <img src="https://picsum.photos/id/227/200/300" alt="" style={{width:"65%"}}/>
      </div>
      <div className="banner-right" style={{flex:7,justifyContent:"center",alignItems:"center"}}>
        <div className="banner-right-row-1">
          <p style={{paddingBottom:"40px"}}><b>WELCOME TO MY PORTFOLIO</b></p>
        </div>
        
        <div className="banner-right-row-2">
          <p>
            My name is <b>Luong Viet Quang Minh</b> and I am a <b>Student</b>{" "}
            with a passion for <b>Frontend Development</b>.
          </p>
          <p style={{paddingBottom:"20px"}}>
            Feel free to check out my <b>Projects</b> and <b>Activities</b>{" "}
            below.
          </p>
        </div>
        <div className="banner-right-row-3">
            <a href="https://chat.zalo.me/index.html"><b>Contact me</b></a>

        </div>
      </div>
    </div></section>
  );
}

export default Banner;
