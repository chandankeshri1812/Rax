import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import base__url from './api/BootApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateCourse() {

  const [post, setPost] = useState(
    {
      courseName: '',
      courseDescription: '',
      details: ''

    }
  );



  const handleData = (e) => { setPost({ ...post, [e.target.name]: e.target.value }) }

  const postCourses = (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();

    Object.entries(post).forEach(([key, value]) => {
      bodyFormData.append(key, value)
    })

    axios({
      method: "post",
      url: `${base__url}/course/courseCreate`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        // console.log(response);
        toast("Course is created !", {
          position: "top-center",
          theme: "dark"
        });


      })
      .catch(function (error) {
        //handle error
        console.log(error);
        toast("Course is not created, please entry correct input !", {
          position: "top-center",
          theme: "dark"
        });
      });


  }





  return (
    <>

      <ToastContainer />

      <div className="createCourse_cont ">
        <div className='h1_createnewCourese'> Add New Course</div>
        <div className="login_container">
          <div className="login_container_2">
            <form className='createCourse_form'>

              <div className="login-container-input common-input-container">
                <label className="login-form-label common-form-label"><b>Course Name</b></label>
                <input className="login-form-input common-form-input main_createCourse_input" type="text" placeholder="Enter Course Name"
                  name="courseName" onChange={handleData}

                  required />

                <label className="common-form-label" >Enter Course Description</label>

                <textarea
                  className="common-form-input signup_form_control main_createCourse_input" id="signup_text"
                  placeholder="java is ..." rows="5"
                  name="courseDescription" onChange={handleData}
                />


                <label className="common-form-label" >Enter Course Details</label>
                <textarea
                  className="common-form-input signup_form_control main_createCourse_input" id="signup_text"
                  placeholder="Java is a programming language...." rows="8"
                  name='details' onChange={handleData}

                ></textarea>

                <button className="login-form-btn btn btn-primary" type="submit" onClick={postCourses}>Create Course</button>

              </div>

            </form>
          </div>
        </div >

      </div>

    </>
  )
}
export default CreateCourse;