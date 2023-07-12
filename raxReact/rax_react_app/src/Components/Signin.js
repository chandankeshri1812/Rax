import React from 'react'

export default function Signin() {
    return (
        <>
            <div className="signup-container">

                <h1 className="signup_text">Registration Here</h1>

                <div className="signup_card">


                    <form className="signup_form" method="post">

                        <div className="signup-row-container">
                            <div className="signup-col-container">

                                <div className="form-group">
                                    <label className="common-form-label" for="name_field">Your Name</label>
                                    <input type="text"
                                        className="common-form-input signup_form_control" id="name_field"
                                        aria-describedby="emailHelp" placeholder="Enter Name" name="name"
                                        required />
                                </div>



                                <div className="form-group">
                                    <label className="common-form-label" for="email_field">Your Email</label> <input
                                        type="email" className="common-form-input signup_form_control"
                                        aria-describedby="emailHelp" placeholder="Enter Email" name="email"
                                        required />
                                </div>
                            </div>

                            <div className="signup-col-container">

                                <div className="form-group">
                                    <label className="common-form-label" for="name_field">Your Phone Number</label> <input
                                        type="text" className="common-form-input signup_form_control"
                                        placeholder="Enter Your Phone Number" name="phoneNumber"
                                        required />
                                </div>



                                <div className="form-group">
                                    <label className="common-form-label" for="password_field">Your Password</label> <input
                                        type="password" className="common-form-input signup_form_control" id="password_field"
                                        aria-describedby="emailHelp" placeholder="Enter Password  " name="password"
                                        required />
                                </div>
                            </div>

                        </div>


                        <div className="signup-row-container">

                            <div className=" signup_form_check">

                                <input id="signup-agrement" type="checkbox" name="argrement"
                                    className="common-form-input signup_form_check_input" />
                                <label for="agreement">Accept
                                    terms and conditons</label>
                            </div>


                            <div className="signup_btn_container">

                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </div>

                    </form>
                </div>


            </div>

        </>
    )
}
