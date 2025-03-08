import React from 'react'

function Activity() {
  return (
    <div 
    style={{
      
      backgroundColor: "#d3d3d0",
      
      justifyContent: "center",
      alignItems: "center",
      
    }}
    >
      <h1 style={{paddingLeft:50}}><b>Activity</b></h1>
    <div className="Activity" 
    style={{
      gap:20,
      backgroundColor: "#d3d3d0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    }}
    >
      
      <div className="Activity-left"
      style={{paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 50,
        }}
      >
        <p>I find running extraordinary as it is the medicine my mind craves after a long day. A hard afterschool workout can drain me, but a nice run, with a regulated pace, breath, and heartbeat, always makes me feel whole. During these runs, I often think of Marcus Aurelius's words "It is in your own power to maintain the beauty of your soul or to be a decent human being.". In the quiet rhythm,I feel a connection to this truth. The simplicity of running helps me reflect, clear my mind. Each stride reminds me of how I navigate my inner world, nurturing resilience, compassion, and the strength to be a better version of myself. *The image was taken when I attended the Techcombank HCMC midnight run.
My experience in "Darling, Darling, Santa is Coming 2023" was both challenging and heartwarming. The preparation involved coordinating donations, planning activities, and ensuring everything would create a joyful, welcoming atmosphere for the community. The experience deepened my appreciation for giving back, especially during the holiday season when bringing happiness to others is the greatest gift. *Image was taken when I was preparing Christmas tree made of velvet wire.</p>
      </div>
      
      <div className="Activity-right" style={{minWidth:300,display:"flex",alignItems:"center"}}>
      <img src="https://picsum.photos/id/237/200/300" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Activity