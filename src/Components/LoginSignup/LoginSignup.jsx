import React, { useState, useEffect } from 'react';
import './LoginSignup.css'; // Assuming your styles are correct in this file
import IMG1 from "../../assets/img2.jpg"; // Background image
import LOGO from "../../assets/logo.png"; // Logo image
// import GoogleLogin from './GoogleLogins'; // Assuming GoogleLogin is correctly implemented
import useSignup from '../../hooks/useSignup'; // Custom hook for signup
import useLogin from '../../hooks/useLogin'; // Custom hook for login
import { useNavigate, useLocation } from 'react-router-dom'; // React Router hooks for navigation

const LoginSignup = () => {
  const location = useLocation(); // To detect the current path
  const navigate = useNavigate(); // To navigate programmatically

  // Determine if the current path is for sign-in or sign-up
  const [isSignIn, setIsSignIn] = useState(location.pathname === '/login');

  // State for the sign-up form
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for the login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Using custom hooks for login and signup, handling the async requests
  const { loading: loadingSignup, signup } = useSignup();
  const { loading: loadingLogin, login } = useLogin();

  // Handles the sign-up form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      alert("Passwords do not match!"); // Simple validation feedback
      return;
    }
    await signup(inputs); // Trigger signup function
  };

  // Handles the login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password); // Trigger login function
    if (result) {
      navigate('/'); // Redirect to home page upon successful login
    }
  };

  // Effect to toggle between sign-in and sign-up based on the path
  useEffect(() => {
    setIsSignIn(location.pathname === '/login');
  }, [location]);

  return (
    <>
      <img className='container1-img' src={IMG1} alt="Background" />
      <div id="container1" className={`container1 ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        <div className="row">
          {/* Sign-up form */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <form className='flex flex-col items-center justify-center' onSubmit={handleSignupSubmit}>
                  <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input
                      className='text-black'
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={inputs.username}
                      onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bx-mail-send"></i>
                    <input
                      className='text-black'
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={inputs.email}
                      onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      className='text-black'
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={inputs.password}
                      onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      className='text-black'
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={inputs.confirmPassword}
                      onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" disabled={loadingSignup}>
                    {loadingSignup ? 'Signing up...' : 'Sign up'}
                  </button>
                  <p>
                    <span>Already have an account?</span>&nbsp;
                    <b onClick={() => navigate('/login')} className="pointer">
                      Sign in here
                    </b>
                  </p>
                  {/* <GoogleLogin /> */}
                </form>
              </div>
            </div>
          </div>

          {/* Sign-in form */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <form className='flex flex-col items-center justify-center' onSubmit={handleLoginSubmit}>
                  <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input
                      className='text-black'
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      className='text-black'
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" disabled={loadingLogin}>
                    {loadingLogin ? 'Signing in...' : 'Sign in'}
                  </button>
                  <p>
                    <b className='text-black'>Forgot password?</b>
                  </p>
                  <p>
                    <span className='text-black'>Don't have an account?</span>&nbsp;
                    <b onClick={() => navigate('/signup')} className="pointer">
                      Sign up here
                    </b>
                  </p>
                  {/* <GoogleLogin /> */}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Branding and images */}
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <img className='logo-img' src={LOGO} alt="Logo" />
            </div>
            <div className="img sign-in"></div>
          </div>
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
