import React from "react";
import Navbar from "./components/Navbar/Navbar";

function Login() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-8">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className="rounded-full shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                Sign in
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className="rounded-full shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                Sign up
              </button>
            </div>
            {isLogin ? (
              <>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Login</h1>
                <form className="mt-8 flex flex-col items-center gap-3" action="#">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                    Sign in
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Sign Up</h1>
                <form className="mt-8 flex flex-col items-center gap-3" action="#">
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="name"
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                    Sign Up
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
