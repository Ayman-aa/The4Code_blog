import React from "react";
import { Code, Terminal, ChevronRight, Github, Twitter, Linkedin } from "lucide-react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoryShowcase from "./components/Category_showcase/CategoryShowcase";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />

      <Hero />

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
      <CategoryShowcase />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
