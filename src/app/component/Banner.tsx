import React from "react";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        minHeight: "100vh",
        backgroundColor: "#d3d3d3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div className="banner-left">
        <img src="https://picsum.photos/id/227/200/300" alt="" />
      </div>
      <div className="banner-right">
        <div className="banner-right-row-1">
          <h1>WELCOME TO MY PORTFOLIO</h1>
        </div>
        <div className="banner-right-row-2">
          <p>
            My name is <b>John Doe</b> and I am a <b>Full Stack Developer</b>{" "}
            with a passion for <b>Frontend Development</b>.
          </p>
          <p>
            Feel free to check out my <b>Projects</b> and <b>Activities</b>{" "}
            below.
          </p>
        </div>
        <div className="banner-right-row-3">
            <button>CONTACT ME</button>

        </div>
      </div>
    </div>
  );
}

export default Banner;
