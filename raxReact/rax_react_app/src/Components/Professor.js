import React from 'react'

export default function Professor({ professor }) {
  return (



    <div className="card_container">
      <div className="card">
        {/* <div className="card_u">
        <img src="{course.profileImg}" alt="profile img" />
    </div> */}
        <div className="card_l">


          <h1>{professor.professorName}</h1>
          <p>{professor.professDetails}</p>
          <h2>{professor.yearOfJoining}</h2>
          <h3>{professor.professorEmail}</h3>


          <button className='btn'>Get Details</button>
        </div>
      </div>

    </div>


  )
}
