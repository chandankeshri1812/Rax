
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import base__url from './api/BootApi'
import Professor from './Professor';
const AllProfessor = () => {
  const fetchData = async () => {
    const res = await axios.get(`${base__url}/professor/allProfessor`);

    // console.log("all courses are : ", res.data);
    setProfessor(res.data);
  };

  const [professor, setProfessor] = useState([
    // { id: "1", courseName: "java", courseDescription: "java is a program language", profileImg: "img" },
    // { id: "2", courseName: "python", courseDescription: "python is a program language", profileImg: "pythonimg" },
  ])

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>


      <div className='allcourse_container'>
        <h1 className='h1_allcourses'>
          All professor

        </h1>
        <div className="mainCourse_conat">
          <div className="Coursecard">

            {professor.length > 0 ? professor.map((item) => <Professor key={item.id} professor={item} />)
              : " No professor "}

          </div>
        </div>



      </div>
    </>
  )
}
export default AllProfessor;