import React from 'react'

function Score() {
  return (
    <div className="Score" 
    style={{
      minHeight: "20vh",
      backgroundColor: "#d3d3d0",
      paddingLeft:600,
      justifyContent: "center",
      alignItems: "center",
      gap:20
    }}
    >
      <h1>Academic achivements</h1>
      <h4><b>Standardized Tests</b></h4>
      <div className="Score-score"
      style={{
        display:"flex",
        gap:20
    }}
      >
      <div className="Score-left">
        <h1><b>Ielts:7.5</b></h1>
      </div>
      <div className="Score-right">
        <h1><b>SAT:1470 </b></h1>
      </div>
      </div>
    </div>
  )
}

export default Score