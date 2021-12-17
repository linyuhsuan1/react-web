import React, { useState } from 'react';
import Nav from './view/layout/Nav';
import './index.css';  // Tailwind CSS 必須引入檔案才能編譯
import {
    BrowserRouter as Router,

} from "react-router-dom";
import AppRouter from './view/layout/appRoutes';
import CartContext from './context/cartContext';
import IsLoginContext from './context/isLoginContext';
import CartItemDetail from './model/cartItemDetail';
import CartService from './service/cartService';
import CustomerService from './service/customerService';
const cartService = new CartService();
const customerService = new CustomerService();


//將原本寫至productDetail裡的addInCart移至此作為共用
const mergeDataWithToCartItemsDetail = (
    cartItemDetails,
    product,
    quantity,
    append = true
) => {
    const quantityForSubmit = quantity
    if (cartService.getCartItem(product.id)) {
        return cartItemDetails.map((item) => {
            if (item.product.id === product.id) {
                if (append) {
                    return new CartItemDetail(
                        product,
                        item.quantity + quantityForSubmit
                    )
                } else {
                    return new CartItemDetail(
                        product,
                        quantityForSubmit
                    )
                }
            } else {
                return item
            }
        })
    } else {
        return [
            ...cartItemDetails,
            new CartItemDetail(
                product,
                quantity
            )
        ]
    }
}
const App = () => {
    const [cartItemDetails, setCartItemDetails] = useState([])
    const [isLogIn, setIsLogIn] = useState(customerService.isLoggedIn)
    return (
        <IsLoginContext.Provider value={[isLogIn, setIsLogIn]}>
            <CartContext.Provider value={[cartItemDetails, setCartItemDetails, mergeDataWithToCartItemsDetail]}>
                <Router>
                    <Nav />
                    <AppRouter />
                </Router>
            </CartContext.Provider>
        </IsLoginContext.Provider>
    )
}
export default App;
