import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext'
import CartService from '../../service/cartService'

const cartService = new CartService()


const QuantitySelector = ({ value, onChange }) => {
    const valueArray = useMemo(() => {
        let tmp = Array.from(Array(101).keys())
        tmp.shift()
        return tmp
    }, [])
    return (
        <div>
            <select value={value} onChange={onChange}>
                {
                    valueArray.map((number) => {
                        return (<option key={number} value={number}>{number}</option>)
                    })
                }
            </select>
        </div>
    )
}

const CartIndexPage = () => {
    const [cartItemDetails, setCartItemDetails, mergeDataWithToCartItemsDetail] = useContext(CartContext);

    const total = useMemo(() => {
        return cartItemDetails.reduce((sum, item) => {
            return sum + item.quantity * item.product.price
        }, 0)
    }, [cartItemDetails])

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
                    <div className="pb-10 mb-10 border-b border-gray-200 md:w-1/2 md:pr-12 md:py-8 sm:w-full">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            { 
                                cartItemDetails.map((cartItem) => {
                                    const { product, quantity } = cartItem
                                    return (
                                        <li className="flex py-6" key={product.id}>
                                            <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                                <img src={product.imageUrl} className="object-cover object-center w-full h-full" />
                                            </div>

                                            <div className="flex flex-col flex-1 ml-4">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            {product.name}
                                                        </h3>
                                                        <p className="ml-4">
                                                            ${product.price}
                                                        </p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {product.id}
                                                    </p>
                                                </div>
                                                <div className="flex items-end justify-between flex-1 text-sm">
                                                    <span className="text-gray-500">
                                                        <QuantitySelector
                                                            value={quantity}
                                                            onChange={
                                                                (e) => {
                                                                    const { value } = e.target;
                                                                    const newQuantity = parseInt(value);
                                                                    const newCartItemDetails = mergeDataWithToCartItemsDetail(
                                                                        cartItemDetails,
                                                                        product,
                                                                        newQuantity,
                                                                        false
                                                                    )
                                                                    setCartItemDetails(newCartItemDetails)
                                                                    //更新購物車
                                                                    cartService.updateCartItem(
                                                                        CartService.createCartItem(
                                                                            product.id,
                                                                            newQuantity
                                                                        )
                                                                    )
                                                                }
                                                            }

                                                        />
                                                    </span>

                                                    <div className="flex">
                                                        <button type="button" className="font-medium text-gray-600 hover:text-blue-500"
                                                            onClick={
                                                                () => {
                                                                    const newCartItemDetails = cartItemDetails.map(
                                                                        (item) => {
                                                                            if (item.product.id === product.id) {
                                                                                return null
                                                                            }
                                                                            return item
                                                                        }).filter(x => x)
                                                                    setCartItemDetails(newCartItemDetails)
                                                                    cartService.removeCartItem(product.id)
                                                                }
                                                            }

                                                        >Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>)

                                })
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col p-4 pt-8 bg-gray-200 rounded-lg md:w-1/2 md:pl-8">
                        <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${total}</p>
                            </div>
                            <div className="flex items-center justify-center mt-6 ">
                                <Link to="checkout">
                                    <span
                                        className="w-1/2 px-6 py-3 text-base font-medium text-center text-white bg-blue-600 border border-transparent rounded-md shadow-sm">Checkout</span>
                                </Link>
                            </div>
                            <div className="flex justify-center mt-6 text-sm text-center text-gray-500">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartIndexPage;