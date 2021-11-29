import React, { useEffect, useState, useContext } from 'react';
import {
    Link,
} from "react-router-dom";

import CartService from '../../service/cartService'
import ProductService from '../../service/productService'
import CartContext from '../../context/cartContext'
import CartItemDetail from '../../model/cartItemDetail';

const cartService = new CartService()
const productService = new ProductService()
const CartItemPopup = () => {
    const [open, setOpen] = useState(false)
    const [cartItemDetails, setCartItemDetails] = useContext(CartContext)

    const count = cartItemDetails.reduce((sum, item) => {
        return sum + item.quantity
    }, 0)

    useEffect(() => {

        const loadCartItemsDetail = async () => {
            const cartItems = cartService.getCartItems()

            if (cartItems.length > 0) {
                const productIds = cartItems.map((cartItem) => {
                    return cartItem.productId
                })
                const products = await productService.getProductsByIds(productIds)
                const result = products.map((product) => {
                    const cartItem = cartService.getCartItem(product.id)
                    if (!cartItem) {
                        return null
                    }
                    return new CartItemDetail(product, cartItem.quantity)
                })
                setCartItemDetails(result)
            }
        }

        loadCartItemsDetail()
    }, [productService])
    return (
        <>
            <span className="flex px-6 py-2 text-red-500 font-font-chinese hover:text-blue-500" onClick={() => setOpen(true)}>購物車{count}</span>
            {open ? (
                <div className="flex flex-col justify-center" >
                    <div className="fixed z-10 mt-4" >
                        <div className="absolute right-0 h-40 py-2 mt-2 bg-white border rounded shadow-xl w-72">
                            <div className="py-2">
                                <div className="flex p-2 bg-white border-b border-gray-100 cursor-pointer hover:bg-gray-100" >

                                    <div className="w-12 p-2"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                                    {
                                        cartItemDetails.map((item) => {
                                            return (
                                                <div className="flex-auto w-32 text-sm" key={item.productId}>
                                                    <div className="font-bold">{item.productId}</div>
                                                    <div className="truncate">{item.productName}</div>
                                                    <div className="text-gray-400">Qt: {item.quantity}</div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="flex flex-col items-end font-medium w-18">
                                        <div className="w-4 h-4 mb-6 text-red-700 rounded-full cursor-pointer hover:bg-red-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/cart">
                                <div className="flex justify-center block px-4 py-0 transition-colors text-normal" >
                                    <button className="p-2 text-sm text-white bg-purple-500 rounded">加入購物車</button>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
export default CartItemPopup