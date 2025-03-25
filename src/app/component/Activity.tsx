import React from "react";

function Activity() {
  return (
    <div
      style={{
        backgroundColor: "#FFF8E1",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ paddingLeft: 50 }}>
        <b style={{ fontSize: "1.5rem" }}>Activity</b>
      </h1>
      <div
        className="Activity"
        style={{
          gap: 20,
          backgroundColor: "#FFF8E1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="Activity-left"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{textAlign:"justify"}}>
            My journey into the world of science and technology has been
            incredibly enriching. As a student at Le Quy Don High School for the
            Gifted, I ve had the privilege of exploring my passion through
            various projects and competitions. Notably, I developed a thermal
            energy to electrical energy conversion device for a science and
            engineering fair. This project stemmed from my deep interest in
            sustainable energy solutions and allowed me to apply theoretical
            knowledge to practical innovation. The process of designing,
            building, and testing the device was both challenging and rewarding,
            solidifying my commitment to finding creative solutions to
            real-world problems. Furthermore, I m a proud member of the Time
            Lens team, which participated in the Imagine Cup Junior competition.
            Our project focused on utilizing artificial intelligence to
            digitally restore historical sites. This endeavor was particularly
            exciting as it combined my fascination with technology and my
            appreciation for cultural heritage. We believe that AI can play a
            crucial role in preserving and revitalizing historical landmarks,
            making them accessible to future generations. Collaborating with my
            teammates to develop this concept, from brainstorming to
            prototyping, was an invaluable learning experience. It highlighted
            the power of teamwork and the potential of AI to bridge the gap
            between the past and the future. These experiences have fueled my
            desire to continue exploring the intersection of science and
            technology, and to contribute meaningfully to advancements that
            benefit society.
          </p>
        </div>

        <div
          className="Activity-right"
          style={{
            minWidth: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="https://picsum.photos/id/237/200/300" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Activity;
