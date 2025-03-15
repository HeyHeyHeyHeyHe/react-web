import React from 'react'

function Score() {
  return (
    <div className="Score" 
    style={{
      minHeight: "20vh",
      backgroundColor: "#FFF8E1",
      
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"column",
      gap:20
    }}
    >
      <h1 style={{fontSize:50}}><b>Academic achivements</b></h1>
      <h4 style={{fontSize:30}}><b>Standardized Tests</b></h4>
      <div className="Score-score"
      style={{
        display:"flex",
        gap:20
    }}
      >
      <div className="Score-left" style={{
        width:200,
        padding:20,
        backgroundColor:"#fff",
        borderRadius:10,
        border:'2px solid #08141d',
        display:"flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize:20
      }}>
      <h1 style={{fontSize:20, color:"blue"}}><b>Ielts:7.5 </b></h1>


      </div>
      <div className="Score-right" style={{
        width:200,
        padding:20,
        backgroundColor:"#fff",
        borderRadius:10,
        border:'2px solid #08141d',
        display:"flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize:20
      }}>
        <h1 style={{fontSize:20, color:"blue"}}><b>SAT:1470 </b></h1>
      </div>
      </div>
    </div>
  )
}

export default Score