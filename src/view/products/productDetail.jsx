import React, { useState, useCallback, useContext } from 'react';
import CrncFormat from './component/crncFormat';
import CartService from '../../service/cartService';
import CartContext from '../../context/cartContext'
import CartItemDetail from '../../model/cartItemDetail';
const cartService = new CartService();
const ProductDetail = ({ product }) => {
    const isDiscont = product.onSale ? <CrncFormat product={product} /> : (<>${product.price}</>);
    const [quantity, setQuantity] = useState(1); //select下拉選單
    const [cartItemDetails, setCartItemDetails, mergeDataWithToCartItemsDetail] = useContext(CartContext)
    const selectQuantity = useCallback((e) => {
        const { value } = e.target
        setQuantity(value)
    }, [])


    // 加入購物車

    const addInCart = useCallback((e) => {
        const quantityForSubmit = parseInt(quantity)
        const newCartItemDetails = mergeDataWithToCartItemsDetail(
            cartItemDetails,
            product,
            quantityForSubmit
        )

        setCartItemDetails(newCartItemDetails)


        cartService.addInCart(product.id, quantityForSubmit)
        // window.location.replace("/products")
    })


    return (
        <section className="overflow-hidden text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-wrap mx-auto lg:w-4/5">
                    <img className="object-cover object-center w-full rounded h-60 lg:w-1/2 lg:h-auto" src={product.imageUrl} />
                    <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                        <h2 className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
                        <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{product.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="ml-3 text-gray-600">4 Reviews</span>
                            </span>
                            <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                                <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                                <button className="w-6 h-6 ml-1 bg-indigo-500 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                            </div>
                            <div className="flex items-center ml-6">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 "
                                        value={quantity}
                                        onChange={selectQuantity}>
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                                                return (
                                                    <option key={number} value={number}>{number}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="text-2xl font-medium text-gray-900 title-font">{isDiscont}</span>
                            <button className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600" onClick={addInCart}>Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProductDetail;