import React from 'react'

const CartIndexPage = () => {
    console.log('cart')
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
                                        <div className="flex items-center justify-between pt-6 mt-6">
                                            <div className="flex items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width="60" className="rounded-full " />
                                                <div className="flex flex-col ml-3"> <span className="font-medium md:text-md">Chicken momo</span> <span className="text-xs font-light text-gray-400">#41551</span> </div>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className="flex pr-8 "> <span className="font-semibold">-</span> <input type="text" className="w-8 h-6 px-2 mx-2 text-sm bg-gray-100 border rounded focus:outline-none" value="1" /> <span className="font-semibold">+</span> </div>
                                                <div className="pr-8 "> <span className="text-xs font-medium">$10.50</span> </div>
                                                <div> <i className="text-xs font-medium fa fa-close"></i> </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-6 mt-6 border-t">
                                            <div className="flex items-center"> <img src="https://i.imgur.com/Uv2Yqzo.jpg" width="60" className="rounded-full " />
                                                <div className="flex flex-col ml-3 "> <span className="w-auto font-medium text-md">Spicy Mexican potatoes</span> <span className="text-xs font-light text-gray-400">#66999</span> </div>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className="flex pr-8"> <span className="font-semibold">-</span> <input type="text" className="w-8 h-6 px-2 mx-2 text-sm bg-gray-100 border rounded focus:outline-none" value="1" /> <span className="font-semibold">+</span> </div>
                                                <div className="pr-8"> <span className="text-xs font-medium">$10.50</span> </div>
                                                <div> <i className="text-xs font-medium fa fa-close"></i> </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-6 mt-6 border-t">
                                            <div className="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" className="rounded-full " />
                                                <div className="flex flex-col ml-3 "> <span className="font-medium text-md">Breakfast</span> <span className="text-xs font-light text-gray-400">#86577</span> </div>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className="flex pr-8"> <span className="font-semibold">-</span> <input type="text" className="w-8 h-6 px-2 mx-2 text-sm bg-gray-100 border rounded focus:outline-none" value="1" /> <span className="font-semibold">+</span> </div>
                                                <div className="pr-8"> <span className="text-xs font-medium">$10.50</span> </div>
                                                <div> <i className="text-xs font-medium fa fa-close"></i> </div>
                                            </div>
                                        </div>
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