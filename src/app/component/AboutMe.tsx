import React from 'react'

function AboutMe() {
  return (
    <div
      className="Aboutme"
      style={{
        
        backgroundColor: "#FFF8E1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div className="Aboutme-left"
      style={{paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 50,
        }}
      >
        <div className="Aboutme-left-row-1">
          <h1 style={{fontSize:"1.5rem"}}><b>About me</b> </h1>
        </div>
        <div className="Aboutme-left-row-2">
          <p>
          Hello. I m a student at Le Quy Don High School for the Gifted in Da Nang. As the youngest child in my family, I ve always been surrounded by love and support. I have a deep passion for science, especially fields like physics, chemistry, and biology. I m endlessly curious about the world around me and love exploring new ideas. I hope to contribute to the advancement of science in the future.
          </p>
          <p>
          My Birth:<b>July 17, 2007</b>
          </p>
          <p>
          Dial me:<b>777891718</b>
          </p>
          <p>
          For business contact me:<b>quangminhluongviet@gmail.com</b>
          </p>
          <p>
          Adress:<b>Da Nang, Viet Nam </b>
          </p>
        </div>
      </div>
      <div className="Aboutme-right"
      style={{
        paddingRight:20,
        paddingLeft:20,
        minWidth:400
      }}
      >
        <img src="https://www.arena-multimedia.vn/wp-content/uploads/2024/04/ky-thuat-chup-anh-phong-canh.jpg" alt="" 
        
        />
      </div>
    </div>
  )
}

export default AboutMe