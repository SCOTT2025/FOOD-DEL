import React, { useState } from "react";
import "./LoginPopUp.css";

const LoginPopUp = ({ closePopup }) => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Login

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <span className="close-btn" onClick={closePopup}>
          &times;
        </span>

        {isSignUp ? (
          // SIGN UP FORM
          <>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Your name" className="input-field" />
            <input type="email" placeholder="Your email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button className="create-account-btn">Create account</button>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>
            <p className="switch-form">
              Already have an account?
              <span className="highlight" onClick={() => setIsSignUp(false)}>
                {" "}
                Login here
              </span>
              .
            </p>
          </>
        ) : (
          // LOGIN FORM
          <>
            <h2>Login</h2>
            <input type="email" placeholder="Your email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button className="create-account-btn">Login</button>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>
            <p className="switch-form">
              Create a new account?
              <span className="highlight" onClick={() => setIsSignUp(true)}>
                {" "}
                Click here
              </span>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPopUp;