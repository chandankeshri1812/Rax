import React, { useState, useEffect } from 'react';
import Course from './Course';
import base__url from './api/BootApi'
import axios from 'axios';


const Courses = () => {

  const fetchData = async () => {
    const res = await axios.get(`${base__url}/course/allcourses`);

    // console.log("all courses are : ", res.data);
    setCourses(res.data);
  };

  const [courses, setCourses] = useState([
    // { id: "1", courseName: "java", courseDescription: "java is a program language", profileImg: "img" },
    // { id: "2", courseName: "python", courseDescription: "python is a program language", profileImg: "pythonimg" },
  ])

  useEffect(() => {
    fetchData();
  }, [])

  var clen = courses.length;

  return (
    <>
      <div className='allcourse_container'>
        <h1 className='h1_allcourses'>

          All courses
        </h1>
        <div className="mainCourse_conat">
          <div className="Coursecard">

            {(clen > 0)
              ? courses.map((item) => <Course key={item.id} course={item} />)
              : " NO courses "
            }

          </div>
        </div>



      </div>

    </>
  )
}
export default Courses;