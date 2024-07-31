// src/components/SignUp.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(fullName, username, email, password);
    navigate('/login');
  };

  return (
    <div>
      <section className="breedcrumb" style={{ background: "url('src/images/bg/bg-04.jpg') center center/cover no-repeat" }}>
        <div className="container">
          <h2 className="breedcrumb__title text--heading-2">Sign Up</h2>
          <ul className="breedcrumb__page">
            <li className="breedcrumb__page-item">
              <a href="/" className="breedcrumb__page-link text--body-3">Home</a>
            </li>
            <li className="breedcrumb__page-item">
              <a href="#" className="breedcrumb__page-link text--body-3">/</a>
            </li>
            <li className="breedcrumb__page-item">
              <a href="#" className="breedcrumb__page-link text--body-3">Account</a>
            </li>
            <li className="breedcrumb__page-item">
              <a href="#" className="breedcrumb__page-link text--body-3">/</a>
            </li>
            <li className="breedcrumb__page-item">
              <a href="#" className="breedcrumb__page-link text--body-3">Sign Up</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section registration">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-0">
              <div className="registration__features">
                <div className="registration__features-item">
                  <span className="icon">
                    <img src="./src/images/icon/chart.png" alt="chart" />
                  </span>
                  <div className="registration__features-info">
                    <h2 className="text--body-2-600">Manage Your Ads</h2>
                    <p className="text--body-3">Easily manage your ads on your website! With our user-friendly interface, you can edit, update, and track your ads. Keep your ads up-to-date and reach more potential buyers with just a few clicks.</p>
                  </div>
                </div>
                <div className="registration__features-item">
                  <span className="icon">
                    <img src="./src/images/icon/chart-circle.png" alt="chart" />
                  </span>
                  <div className="registration__features-info">
                    <h2 className="text--body-2-600">Chat with Anyone, Anytime</h2>
                    <p className="text--body-3">Chat and connect with sellers and potential service providers.</p>
                  </div>
                </div>
                <div className="registration__features-item">
                  <span className="icon">
                    <img src="./src/images/icon/chart.png" alt="chart" />
                  </span>
                  <div className="registration__features-info">
                    <h2 className="text--body-2-600">Verified User</h2>
                    <p className="text--body-3">Verified and authenticated users only.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-0">
              <div className="registration-form">
                <h2 className="text-center text--heading-1 registration-form__title">Sign Up</h2>
                <h2 className="registration-form__alternative-title text--body-3">or Sign Up With Email</h2>
                <div className="registration-form__wrapper">
                  <form onSubmit={handleSubmit}>
                    <div className="input-field__group">
                      <div className="input-field">
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="input-field">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-field">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button className="btn btn--lg w-100 registration-form__btns" type="submit">
                      Sign Up
                      <span className="icon--right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <p className="text--body-3 registration-form__redirect">
                      Already Have an Account? <Link to="/sign-in">Sign In</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
