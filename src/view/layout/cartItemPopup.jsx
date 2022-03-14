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
                }).filter(x => x)
                setCartItemDetails(result)
            }
        }
        loadCartItemsDetail()
    }, [setCartItemDetails])
    return (
        <>
            <div className="relative inline-block group">
                <div className="flex flex-row px-4 py-2 ">
                    <span className="text-gray-600 font-font-chinese hover:text-blue-500">購物車</span>
                    <span className="w-6 h-6 ml-[0.5rem] mr-4 text-center text-white bg-blue-400 rounded-full">{count}</span>
                </div>

                <ul className="absolute z-10 hidden p-3 bg-gray-200 rounded-md group-hover:block ml-[-107%] iphoneX:ml-[3%]">
                    {
                        cartItemDetails.map((item) => {
                            return (
                                <li className="flex py-6" key={item.productId}>
                                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                        <img src={item.imageUrl} className="object-cover object-center w-full h-full" />
                                    </div>
                                    <div className="flex flex-col flex-1 ml-4">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{item.productName}</h3>
                                                <p className="ml-4"> ${item.product.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500"> {item.productId}</p>
                                        </div>
                                        <div className="flex items-end justify-between flex-1 text-sm">
                                            <span className="text-gray-500"> Qt: {item.quantity}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                    <Link to="/carts">
                        <div className="flex justify-center block px-4 py-0 transition-colors text-normal" >
                            <button className="p-2 text-sm text-white bg-gray-500 rounded">加入購物車</button>
                        </div>
                    </Link>
                </ul>

            </div>
        </>
    )
}
export default CartItemPopup