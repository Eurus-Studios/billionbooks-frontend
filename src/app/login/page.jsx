"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Wrapper from '@/components/Wrapper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to track whether to show the register form

  const [showLoginForm, setShowLoginForm] = useState(false)
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // For demonstration purposes, using a simple hardcoded check.
    if (email === 'admin@gmail.com' && password === 'admin') {
      router.push('/dashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(!showRegisterForm); // Toggle the state
    setShowLoginForm(false); // Ensure login form is hidden when switching to register form
  };
  
  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm); // Toggle the state
    setShowRegisterForm(false); // Ensure register form is hidden when switching to login form
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    alert('Registration logic will be implemented here.');
  };

  return (
    <Wrapper>
      <div className=" my-10 pt-10 flex wrap sm:flex-col md:flex-col xlg: flex-col lg:flex-row items-center justify-center">
        <div className="w-full  mx-10">
          {showRegisterForm ? ( // Conditionally rendering the register form based on showRegisterForm state
            <div>
              <h1 className="text-2xl font-bold popinsfont px-1 uppercase">Register</h1>
              <form
                onSubmit={handleRegister}
                className="latofont w-full px-2 pt-4 pb-8 mb-4"
              >
                {/* register form inputs  */}
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block latofont text-gray-700 mb-2"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    // Add necessary event handlers and value attribute
                    className="shadow text-sm appearance-none border latofont w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block latofont text-gray-700  mb-2"
                  >
                    Email address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    
                    className="shadow text-sm appearance-none border latofont w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block  latofont text-gray-700 mb-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    // Add necessary event handlers and value attribute
                    className="shadow bg-white-200 latofont appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    placeholder="Enter your password"
                    required
                  />

                  <p className="latofont my-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                </div>
                <button
                  type="submit"
                  className="bluebg popinsfont hover:bg-blue-900 text-white font-semi-bold py-3 px-4 w-full  focus:outline-none focus:shadow-outline text-sm"
                >
                  REGISTER
                </button>
              </form>
            </div>
          ) : (
            // Render the login form if showRegisterForm is false
            <div>
              <h1 className="text-2xl font-bold popinsfont px-1 uppercase">Login</h1>
              <form onSubmit={handleLogin} className="latofont w-full px-2 pt-4 pb-8 mb-4">
                {/*  login form inputs  */}
                <div className="mb-4">
                  <label htmlFor="email" className="block latofont text-gray-700  mb-2">
                    Username or email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow text-sm appearance-none border latofont w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="use 'admin@gmail.com and pass: admin' for demo"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block  latofont text-gray-700 mb-2">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow bg-white-200 latofont appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bluebg popinsfont hover:bg-blue-900 text-white font-semi-bold py-3 px-4 w-full  focus:outline-none focus:shadow-outline text-sm"
                >
                  LOG IN
                </button>
              </form>
            </div>
          )}
          
        </div>

        <div class="hidden lg:block line h-72 w-px bg-gray-200"></div>

        <div className="flex flex-col justify-center align-middle max-w-xl px-10 min-w-xl">
        <h1  className='popinfont font-bold text-2xl text-center'>REGISTER</h1>
        <p className='latofont text-center my-5'>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        {!showRegisterForm ? (
          <button
            onClick={handleRegisterClick}
            className="self-center bluebg tm-auto popinsfont hover:bg-blue-900 text-white font-semi-bold py-3 px-4 w-max focus:outline-none focus:shadow-outline text-sm"
          >
            REGISTER
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="self-center bluebg tm-auto popinsfont hover:bg-blue-900 text-white font-semi-bold py-3 px-4 w-max focus:outline-none focus:shadow-outline text-sm"
          >
            LOGIN
          </button>
        )}

      </div>

        {/* Rest of the content here */}
      </div>
    </Wrapper>
  );
};

export default Login;
