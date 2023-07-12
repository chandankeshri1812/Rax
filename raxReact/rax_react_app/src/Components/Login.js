import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>

      <div className="login_container login_Main_container">

      <h1 className="signup_text">Login Here</h1>
        <div className="login_container_2">
          <form method="post" >

            <div className="login-container-input common-input-container">
              <label className="login-form-label common-form-label" for="uname"><b>Username</b></label>
              <input className="login-form-input common-form-input" type="text" placeholder="Enter Username"
                name="username" required />
              <label className="login-form-label common-form-label" for="psw"><b>Password</b>
              </label>
              <input className="login-form-input common-form-input" type="password"
                placeholder="Enter Password" name="password" required />

              <button className="login-form-btn btn btn-primary" type="submit">Login</button>
              <label> <input type="checkbox" checked="checked" name="remember" /> Remember me
              </label>



              <div className="forgot-password-btn-container btn btn-primary">

                <Link to="forgot_password">Forgot password ?</Link>
              </div>


            </div>

          </form>
        </div>
      </div >
    </>
  )
}
export default Login;
