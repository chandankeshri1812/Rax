import React from 'react'

const Course = ({ course }) => {
    return (

        <div className="card_container">
            <div className="card">
                {/* <div className="card_u">
                    <img src="{course.profileImg}" alt="profile img" />
                </div> */}
                <div className="card_l">
                    <h1>{course.courseName}</h1>
                    <p>{course.courseDescription}</p>
                    <button className='btn'>Get Details</button>
                </div>
            </div>

        </div>

    )
}
export default Course;