import React from 'react'

function Navigation() {
  return (
    <div className='navigation' style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 50,
        paddingRight: 50,
        position: "fixed",
        top: 0,
        width:"100%",
        backgroundColor:"#FF7043",
        zIndex:100,
        
    }}>
        <div className='navigation-left' style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
        }}>
            <img src="https://picsum.photos/id/237/200/300" alt="" style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
            }} />
            <span>Luong Viet Quang Minh</span>
        </div>
        <div className='navigation-right' style={{
            display: 'flex',
            gap: 20
        }}>
            <a href='#Banner'>Home</a>
            <a href='#AboutMe'>About Me</a>
            <a href='#'>Score</a>
            <a href='#'>Activity</a>
            <a href='#'>Project</a>
            <a href='https://chat.zalo.me/index.html'>Contact</a>
        </div>
    </div>
  )
}

export default Navigation