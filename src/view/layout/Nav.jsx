import React, { useContext, useState } from 'react';
import {
  Link,
} from "react-router-dom";
import CartItemsPopUp from '../layout/cartItemPopup';
import IsLogInContext from '../../context/isLoginContext';
const Nav = () => {
  const [isLogin, setIsLogin] = useContext(IsLogInContext);
  return (
    <React.Fragment>
      <nav className="bg-white font-montserrat">
        <div className="container flex flex-wrap items-center p-4 mx-auto md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <Link to="/products">
              <div className="flex items-center text-2xl font-black text-black">À l'aise</div>
            </Link>
          </div>
          <div className="ml-auto md:hidden">
            <button className="flex flex-col lg:hidden">
              <span className="w-6 h-px mb-1 bg-gray-900"></span>
              <span className="w-6 h-px mb-1 bg-gray-900"></span>
              <span className="w-6 h-px mb-1 bg-gray-900"></span>
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col pt-4 mt-4 -mx-4 text-lg md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
              {/* <Link to="/home">
                <li className="block px-4 py-1 text-gray-600 md:p-2 lg:px-4 hover:text-blue-500">Home</li>
              </Link> */}
              <Link to="/products">
                <li className="block px-4 py-1 text-gray-600 md:p-2 lg:px-4 hover:text-blue-500">所有商品</li>
              </Link>
              {
                isLogin ? (
                  <>
                    {/* <Link to="/orders">
                    <li className="block px-4 py-1 text-gray-600 md:p-2 lg:px-4 hover:text-blue-500">歷史訂單</li>
                    </Link> */}
                    <Link to="/logout">
                      <li className="block px-4 py-1 text-gray-600 md:p-2 lg:px-4 hover:text-blue-500">登出</li>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <li className="block px-4 py-1 text-gray-600 md:p-2 lg:px-4 hover:text-blue-500">登入</li>
                    </Link>
                    <Link to="/signup">
                      <li className="block px-4 py-1 text-gray-600 md:p-2 lg:px-4 hover:text-blue-500">註冊</li>
                    </Link>
                  </>
                )
              }
              <CartItemsPopUp />
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>

  );

}

export default Nav;
