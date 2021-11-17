import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
const  Nav= () => {
  return (
    <React.Fragment>
          <header className="z-40 flex items-center h-24 -mt-6 sm:h-32">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center text-2xl font-black text-black">
          <span className="w-6 h-6 mr-4 bg-blue-500 rounded-full"></span> Profile
        </div>
        <div className="flex items-center">
          <nav className="items-center hidden text-lg text-black lg:flex">
              <div className="h-screen p-4 bg-white dark:bg-gray-900">
      <h1 className="text-5xl text-gray-900 dark:text-white">手動深色模式</h1>
    </div>
    <Link to="/home">
       <span className="flex px-6 py-2 tracking-widest text-red-500 font-fredoka-one hover:text-blue-500">Home</span>
    </Link>
    <Link to="/products">
      <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">所有商品</span>
    </Link>
    <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">購物車</span>

    </nav>
    <button className="flex flex-col lg:hidden">
      <span className="w-6 h-px mb-1 bg-gray-900"></span>
      <span className="w-6 h-px mb-1 bg-gray-900"></span>
      <span className="w-6 h-px mb-1 bg-gray-900"></span>
    </button>

        </div>
      </div>
    </header>

    </React.Fragment>

  );

}

export default Nav;
