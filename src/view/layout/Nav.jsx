import React, { useContext } from 'react';
import {
  Link,
} from "react-router-dom";
import CartItemsPopUp from '../layout/cartItemPopup';
import IsLogInContext from '../../context/isLoginContext';
const Nav = () => {
  const [isLogin, setIsLogin] = useContext(IsLogInContext);
  console.log('fgfddf', isLogin)
  return (
    <React.Fragment>
      <header className="z-40 flex items-center h-24 -mt-6 sm:h-32">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center text-2xl font-black text-black">
            <span className="w-6 h-6 mr-4 bg-blue-500 rounded-full"></span> Profile
          </div>
          <div className="flex items-center">
            <nav className="items-center hidden text-lg text-black lg:flex">

              <Link to="/home">
                <span className="flex px-6 py-2 tracking-widest text-red-500 font-fredoka-one hover:text-blue-500">Home</span>
              </Link>
              <Link to="/products">
                <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">所有商品</span>
              </Link>
              {
                isLogin ? (
                  <>
                    <Link to="/orders">
                      <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">歷史訂單</span>
                    </Link>
                    <Link to="/logout">
                      <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">登出</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">登入</span>
                    </Link>
                    <Link to="/signup">
                      <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500 ">註冊</span>
                    </Link>
                  </>
                )
              }
              <CartItemsPopUp />
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
