import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import base__url from './api/BootApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateProfessor() {

    const [post, setPost] = useState(
        {
            professorName: '',
            professDetails: '',
            yearOfJoining: '',
            role: '',
            professorEmail: ''

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
            url: `${base__url}/professor/createProfessor`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                // console.log(response);
                toast("Professor is created !", {
                    position: "top-center",
                    theme: "dark"
                });


            })
            .catch(function (error) {
                //handle error
                console.log(error);
                toast("Professor is not created, please entry correct input !", {
                    position: "top-center",
                    theme: "dark"
                });
            });


    }






    return (
        <>

            <ToastContainer />

            <div className="createCourse_cont">
                <div className='h1_createnewCourese'> Add New Professor</div>
                <div className="login_container">
                    <div className="login_container_2">
                        <form className='createCourse_form' >

                            <div className="login-container-input common-input-container">
                                <label className="login-form-label common-form-label" for="uname"><b>Your Name</b></label>
                                <input className="login-form-input common-form-input main_createCourse_input" type="text" placeholder="Enter your name"
                                    name="professorName"
                                    onChange={handleData}



                                    required />

                                <label className="login-form-label common-form-label" for="uname"><b>Enter your Email</b></label>
                                <input className="login-form-input common-form-input main_createCourse_input" type="email" placeholder="Enter Your Email"
                                    name="professorEmail"
                                    onChange={handleData}
                                    required />

                                {/* <label className="login-form-label common-form-label" for="uname"><b>Contact Number</b></label>
                                <input className="login-form-input common-form-input main_createCourse_input" type="text" placeholder="Enter Contact Number"
                                    name="courseName"
                                    onChange={handleData}

                                    required /> */}

                                <label className="login-form-label common-form-label" for="uname"><b>Enter Year of Joining</b></label>
                                <input className="login-form-input common-form-input main_createCourse_input" type="text" placeholder="Enter Year of Joining"
                                    name="yearOfJoining"
                                    onChange={handleData}
                                    required />

                                <label className="login-form-label common-form-label" for="uname"><b>Role</b></label>
                                <input className="login-form-input common-form-input main_createCourse_input" type="text" placeholder="Professor"
                                    name="role"
                                    onChange={handleData}
                                    required />


                                <label class="common-form-label" for="about_field">Enter About yourself</label>
                                <textarea
                                    class="common-form-input signup_form_control main_createCourse_input" id="signup_text"
                                    placeholder="Dr. Mukesh is ..." rows="3"
                                    name="professDetails"
                                    onChange={handleData}

                                ></textarea>




                                <button className="login-form-btn btn btn-primary" onClick={postCourses} type="submit">Create Professor</button>

                            </div>

                        </form>
                    </div>
                </div >

            </div>

        </>
    )
}
export default CreateProfessor;