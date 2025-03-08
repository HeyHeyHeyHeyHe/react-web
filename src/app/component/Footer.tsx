import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
function Footer() {
  return (

    <div 
    
    >
      <div className="Footer" style={{
        
        height:"10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:20
      }}>
      <a href="#" target="blank"><CiFacebook style={{width:50,height:50}}/></a>
      <CiInstagram style={{
                width: 50,
                height: 50,
                }} />
      <CiTwitter style={{
                width: 50,
                height: 50,
                }}  />
        
      </div>
      <div style={{
        height:"5vh",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:20
      }}>
      <b>©2025 LUONG VIET QUANG MINH | All Rights Reserved</b>
      </div>
      </div>
  )
}

export default Footer