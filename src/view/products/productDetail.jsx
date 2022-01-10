import React, { useState, useCallback, useContext } from 'react';
import CrncFormat from './component/crncFormat';
import CartService from '../../service/cartService';
import CartContext from '../../context/cartContext'
import CartItemDetail from '../../model/cartItemDetail';
const cartService = new CartService();
const ProductDetail = ({ product }) => {
    const isDiscont = product.onSale ? <CrncFormat product={product} /> : (<>NT. {product.regularPrice}</>);
    const [quantity, setQuantity] = useState(1); //select下拉選單
    const [cartItemDetails, setCartItemDetails, mergeDataWithToCartItemsDetail] = useContext(CartContext)
    const selectQuantity = useCallback((e) => {
        const { value } = e.target
        setQuantity(value)
    }, [])

    // 加入購物車,mergeDataWithToCartItemsDetail移至App.js作為共用
    const addInCart = useCallback(() => {
        const quantityForSubmit = parseInt(quantity);
        const newCartItemDetails = mergeDataWithToCartItemsDetail(
            cartItemDetails,
            product,
            quantityForSubmit,
            true
        );
        setCartItemDetails(newCartItemDetails);
        cartService.addInCart(product.id, quantityForSubmit);
    })


    return (
        <section className="overflow-hidden text-gray-600 body-font mt-[3%]">
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-wrap mx-auto lg:w-4/5">
                    <img className="object-cover object-center w-full rounded h-60 lg:w-1/2 lg:h-auto" src={product.imageUrl} />
                    <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                        <h2 className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
                        <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{product.name}</h1>
                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                            <div className="flex items-center">
                                <span className="mr-3">Quantity</span>
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
                            <button className="flex px-6 py-2 ml-auto text-white bg-gray-500 border-0 rounded focus:outline-none" onClick={addInCart}>加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProductDetail;