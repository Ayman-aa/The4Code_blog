import React from "react";
import { Code, Terminal, Search, Menu, X, ChevronRight, Github, Twitter, Linkedin, LogIn, UserPlus, Sparkles, Zap, Star, Coffee } from "lucide-react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar  />

      {/* Hero Section */}
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-8">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Source for</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-pulse">
                Coding Knowledge
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Dive into the latest tech trends, programming tutorials, and developer insights. Stay ahead with the4code.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-full shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                >
                  Latest Articles
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:text-center">
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-semibold tracking-wide uppercase">
              Featured Articles
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Explore Our Latest Content</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Dive into our most popular and recent articles covering everything from blockchain to web development.
            </p>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Article 1 */}
          <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:rotate-1">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cryptocurrency coins"
              />
              <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                Eps. 32
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">From Bitcoin to Altcoins: Navigating Crypto Landscape</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800">
                  bitcoin
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800">
                  altcoins
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Hosted by:</span>
                  <img
                    className="h-8 w-8 rounded-full ml-2 ring-2 ring-orange-500"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Host"
                  />
                </div>
                <a href="#" className="text-orange-600 hover:text-pink-500 flex items-center transition-colors duration-300">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1626163015484-81fc7e3b90d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Legal gavel and cryptocurrency"
              />
              <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full">
                Eps. 31
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Rise of Crypto Regulation: What It Means for You</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800">
                  regulations
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800">
                  law
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Hosted by:</span>
                  <img
                    className="h-8 w-8 rounded-full ml-2 ring-2 ring-pink-500"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Host"
                  />
                </div>
                <a href="#" className="text-pink-600 hover:text-purple-500 flex items-center transition-colors duration-300">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:rotate-1">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="DeFi concept"
              />
              <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold rounded-full">
                Eps. 30
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">DeFi Demystified: How Decentralized Finance is Shaping the Future</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800">
                  decentralized finance
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Hosted by:</span>
                  <div className="flex -space-x-2 ml-2">
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-purple-500"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Host 1"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-indigo-500"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Host 2"
                    />
                  </div>
                </div>
                <a href="#" className="text-purple-600 hover:text-indigo-500 flex items-center transition-colors duration-300">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Article 4 */}
          <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1639322538074-5800e5ba046a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Smart contract concept"
              />
              <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold rounded-full">
                Eps. 29
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Contracts: Revolutionizing Transactions</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800">
                  smart contracts
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800">
                  finance
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Hosted by:</span>
                  <div className="flex -space-x-2 ml-2">
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-indigo-500"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Host 1"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-blue-500"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Host 2"
                    />
                  </div>
                </div>
                <a href="#" className="text-indigo-600 hover:text-blue-500 flex items-center transition-colors duration-300">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Article 5 */}
          <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:rotate-1">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1646474743891-89fd1d057588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="NFT art collection"
              />
              <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                Eps. 28
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">NFTs Unveiled: The Art of Digital Ownership</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800">
                  nft
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800">
                  digital ownership
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Hosted by:</span>
                  <img
                    className="h-8 w-8 rounded-full ml-2 ring-2 ring-blue-500"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Host"
                  />
                </div>
                <a href="#" className="text-blue-600 hover:text-cyan-500 flex items-center transition-colors duration-300">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Article 6 */}
          <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1639322537133-5fcf1bc3c83c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Blockchain code"
              />
              <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold rounded-full">
                Eps. 27
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Decoding the Blockchain: Basics and Beyond</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-800">
                  blockchain
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-800">
                  crypto basics
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Hosted by:</span>
                  <div className="flex -space-x-2 ml-2">
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-cyan-500"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Host 1"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white ring-2 ring-teal-500"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Host 2"
                    />
                  </div>
                </div>
                <a href="#" className="text-cyan-600 hover:text-teal-500 flex items-center transition-colors duration-300">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
            Load More Articles
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl my-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
              Subscribe to our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-orange-100">
              Get the latest articles and insights delivered straight to your inbox. No spam, just valuable content.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-700 focus:ring-white focus:border-white sm:max-w-xs rounded-full"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-700 focus:ring-white transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-orange-200">
              We care about your data. Read our{" "}
              <a href="#" className="text-white font-medium underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 font-semibold tracking-wide uppercase">
              Explore
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Popular Categories</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl transition-all duration-300 group-hover:from-orange-100 group-hover:to-pink-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:rotate-1">
                <Terminal className="h-8 w-8 text-orange-500 group-hover:text-pink-500 transition-colors duration-300" />
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">Programming</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl transition-all duration-300 group-hover:from-pink-100 group-hover:to-purple-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:-rotate-1">
                <Code className="h-8 w-8 text-pink-500 group-hover:text-purple-500 transition-colors duration-300" />
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Web Dev</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl transition-all duration-300 group-hover:from-purple-100 group-hover:to-indigo-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:rotate-1">
                <svg
                  className="h-8 w-8 text-purple-500 group-hover:text-indigo-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Blockchain</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl transition-all duration-300 group-hover:from-indigo-100 group-hover:to-blue-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:-rotate-1">
                <svg
                  className="h-8 w-8 text-indigo-500 group-hover:text-blue-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.23.16.53.38.73.24.19.54.29.88.29h1.22c.68 0 1.22-.55 1.22-1.22 0-3.54 3.14-6.4 6.96-6.4 3.82 0 6.96 2.87 6.96 6.4 0 3.54-3.14 6.4-6.96 6.4-.46 0-.92-.05-1.36-.14-.6-.13-1.2.18-1.38.77l-.33 1.36c-.14.58.14 1.17.7 1.37.71.25 1.48.38 2.25.38 4.74 0 9-3.65 9-9.28v-1.22z" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Crypto</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl transition-all duration-300 group-hover:from-blue-100 group-hover:to-cyan-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:rotate-1">
                <svg
                  className="h-8 w-8 text-blue-500 group-hover:text-cyan-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  <path d="M22 7l-10 5-10-5" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">NFTs</span>
              </div>
            </a>
            <a href="#" className="group">
              <div className="flex flex-col items-center p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl transition-all duration-300 group-hover:from-cyan-100 group-hover:to-teal-100 group-hover:shadow-md transform group-hover:scale-105 group-hover:-rotate-1">
                <svg
                  className="h-8 w-8 text-cyan-500 group-hover:text-teal-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-300">DeFi</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 rounded-t-3xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                  the4code
                </span>
              </div>
              <p className="text-gray-300 text-base">
                Your trusted source for the latest in coding, blockchain, and cryptocurrency news and tutorials.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Content</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Tutorials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Podcasts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Videos
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Categories</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Blockchain
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Cryptocurrency
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Programming
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2025 the4code. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
