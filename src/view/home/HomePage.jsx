import React, { useState, useEffect } from 'react';

const  HomePage= () => {

  return (
    <div>
      <header className="z-40 flex items-center h-24 -mt-6 sm:h-32">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center text-2xl font-black text-black">
          <span className="w-6 h-6 mr-4 bg-blue-500 rounded-full"></span> Profile
        </div>
        <div className="flex items-center">
            <div className="h-screen p-4 bg-white dark:bg-gray-900">
              <h1 className="text-5xl text-gray-900 dark:text-white">手動深色模式</h1>
            </div>
            <a href="#" className="flex px-6 py-2 tracking-widest text-red-500 font-fredoka-one hover:text-blue-500">Home</a>
            <a href="#" className="flex px-6 py-2 text-red-500 hover:text-blue-500">Skill</a>
            <a href="#" className="flex px-6 py-2 text-red-500 hover:text-blue-500">Info</a>
            <a href="#" className="flex px-6 py-2 text-red-500 text-blue-500">Contact me</a>
         
          <button className="flex flex-col lg:hidden">
            <span className="w-6 h-px mb-1 bg-gray-900"></span>
            <span className="w-6 h-px mb-1 bg-gray-900"></span>
            <span className="w-6 h-px mb-1 bg-gray-900"></span>
          </button>
        </div>
      </div>
    </header>
    
    
    {
      product.map((product) =>{
        return <p key={product.id}> {product.name}</p>
      })
    }
    </div>
    
  );
}

export default HomePage;
