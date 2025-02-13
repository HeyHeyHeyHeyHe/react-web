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
            <a href='#'>Home</a>
            <a href='#'>About Me</a>
            <a href='#'>Score</a>
            <a href='#'>Activity</a>
            <a href='#'>Project</a>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Navigation