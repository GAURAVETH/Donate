import React, { useState, useEffect } from 'react';
import './LoginSignup.css';
import IMG1 from "../../assets/img2.jpg"
import LOGO from "../../assets/logo.png"

const LoginSignup = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
        <img className='container1-img' src={IMG1} alt="" />
      <div id="container1" className={`container1 ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        {/* FORM SECTION */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input className='text-black' type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input className='text-black' type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input className='text-black' type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input className='text-black' type="password" placeholder="Confirm password" />
                </div>
                <button>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  &nbsp;
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input className='text-black' type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input className='text-black' type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                <p>
                  <b className='text-black'>Forgot password?</b>
                </p>
                <p>
                  <span className='text-black'>Don't have an account?</span>
                  &nbsp;
                  <b onClick={toggle} className="pointer text-black">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* CONTENT SECTION */}
        <div className="row content-row">
          {/* SIGN IN CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <img className='logo-img' src={LOGO} alt="logo" />
            </div>
            <div className="img sign-in"></div>
          </div>
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
