import React from "react";
import Article from "../Article/Article";

function Articles() {
  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-semibold tracking-wide uppercase">
            Featured Articles
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Latest Content
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dive into our most popular and recent articles covering everything
            from blockchain to web development.
          </p>
        </div>
      </div>
     <Article />;
    </div>
  );


  
}



export default Articles;
