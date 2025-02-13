import React from 'react'

function AboutMe() {
  return (
    <div
      className="Aboutme"
      style={{
        
        backgroundColor: "#d3d3d0",
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
          <h1><b>About me</b> </h1>
        </div>
        <div className="Aboutme-left-row-2">
          <p>
            I was raised in a Middle-class home within a relatively big family, yet I was born the latest. I really do enjoy Running and Deepening myself in thought among the greens of my neighborhood. Besides my physically active lifestyle, I also love learning how things work and exploring myself, thus I can spend hours of my leisure time to watch documentaries or working on something(I tried replicating the surrounding diversity through building terrariums or fixing the electronics inside my room). My dream is to pursue education in US as an Electrical Engineer.
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
      
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkh4PJaZ5khjPKeSC813IrTVs1JjnjZEFRANxCGp7vPxgsXpkFaSQsFWlULUSTlvTwPOc&usqp=CAU" alt="" 
        style={{paddingTop: 150,
          paddingBottom: 150,
          paddingLeft: 300 
          }}
        />
      </div>
    </div>
  )
}

export default AboutMe