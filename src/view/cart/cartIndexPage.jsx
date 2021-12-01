import React, { useContext, useMemo } from 'react';
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
        <div className="relative inline-block w-64">
            <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
                value={value}
                onChange={onChange}
            >
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
    return (
        <>
            <div className="h-screen bg-gray-300">
                <div className="py-12">
                    <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg md:max-w-5xl">
                        <div className="md:flex ">
                            <div className="w-full p-4 px-5 py-5">
                                <div className="gap-2 md:grid md:grid-cols-3 ">
                                    <div className="col-span-2 p-5">
                                        <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                        {
                                            cartItemDetails.map((cartItem) => {
                                                const { product, quantity } = cartItem
                                                return (
                                                    <div className="flex items-center justify-between pt-6 mt-6" key={product.id}>
                                                        <div className="flex items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width="60" className="rounded-full " />
                                                            <div className="flex flex-col ml-3"> <span className="font-medium md:text-md">{product.title}</span> <span className="text-xs font-light text-gray-400">{product.id}</span> </div>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <div className="flex pr-8 "></div>
                                                            <div className="pr-8 ">
                                                                <QuantitySelector
                                                                    value={quantity}
                                                                    onChange={
                                                                        (e) => {
                                                                            const { value } = e.target;

                                                                            const newQuantity = parseInt(value);
                                                                            console.log('gggg', newQuantity)
                                                                            const newCartItemDetails = mergeDataWithToCartItemsDetail(
                                                                                cartItemDetails,
                                                                                product,
                                                                                newQuantity,
                                                                                false
                                                                            )
                                                                            setCartItemDetails(newCartItemDetails)
                                                                            cartService.updateCartItem(
                                                                                CartService.createCartItem(
                                                                                    product.id,
                                                                                    newQuantity
                                                                                )
                                                                            )
                                                                        }
                                                                    }

                                                                />
                                                            </div>
                                                            <div> <i className="text-xs font-medium fa fa-close"></i> </div>
                                                        </div>
                                                    </div>)

                                            })
                                        }
                                        <div className="flex items-center justify-between pt-6 mt-6 border-t">
                                            <div className="flex items-center"> <i className="pr-2 text-sm fa fa-arrow-left"></i> <span className="font-medium text-blue-500 text-md">Continue Shopping</span> </div>
                                            <div className="flex items-end justify-center"> <span className="mr-1 text-sm font-medium text-gray-400">Subtotal:</span> <span className="text-lg font-bold text-gray-800 "> $24.90</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartIndexPage;