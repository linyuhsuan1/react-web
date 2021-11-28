import React, { useState } from 'react';
import Nav from './view/layout/Nav';
import './index.css';  // Tailwind CSS 必須引入檔案才能編譯
import {
    BrowserRouter as Router,

} from "react-router-dom";
import AppRouter from './view/layout/appRoutes';
import CartContext from './context/cartContext';
const App = () => {
    const [cartItemDetails, setCartItemDetails] = useState([])
    return (
        <CartContext.Provider value={[cartItemDetails, setCartItemDetails]}>
            <Router>
                <Nav />
                <AppRouter />
            </Router>
        </CartContext.Provider>
    )
}
export default App;
