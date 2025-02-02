import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { useStateContext } from '../contexts/ContextProvider'; // Import the context

const Login = () => {
  const { currentMode } = useStateContext(); // Access currentMode from the context

  // Dummy function for Google sign-in
  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Sign in with Google');
  };

  return (
    <div className={`flex justify-center items-center h-screen ${currentMode === 'Dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-md p-8 space-y-6 rounded shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h2 className="text-2xl font-bold text-center">Login to AITUBE</h2>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className={`w-full flex items-center justify-center py-2 border rounded focus:outline-none focus:ring-2 ${currentMode === 'Dark' ? 'border-gray-600 hover:bg-gray-700 focus:ring-gray-500' : 'border-gray-300 hover:bg-gray-50 focus:ring-gray-500'}`}
        >
          <FcGoogle className="text-2xl mr-2" /> {/* Google icon */}
          Sign in with Google
        </button>

        {/* Form Fields */}
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className={`block text-sm font-medium ${currentMode === 'Dark' ? 'text-gray-200' : 'text-gray-700'}`}>Username</label>
            <input
              type="text"
              id="username"
              className={`w-full p-2 border rounded mt-1 ${currentMode === 'Dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className={`block text-sm font-medium ${currentMode === 'Dark' ? 'text-gray-200' : 'text-gray-700'}`}>Password</label>
            <input
              type="password"
              id="password"
              className={`w-full p-2 border rounded mt-1 ${currentMode === 'Dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-4 rounded ${currentMode === 'Dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Login
          </button>
        </form>

        {/* New to AITUBE? Sign up Text with Hyperlink */}
        <p className={`text-sm text-center ${currentMode === 'Dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          New to AITUBE?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
