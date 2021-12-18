import React, { useContext, useState } from 'react';
import ReceiptType from './receiptType';
import AddressPicker from './addressPicker';
const CheckoutInfoEditorContainer = () => {
    return (
        <div className="flex items-center justify-center pt-6 mt-6">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            First Name
                        </label>
                        <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            Last Name
                        </label>
                        <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe" />
                    </div>
                    {/* <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            發票類型
                        </label>
                        <label class="inline-flex items-center ">
                            <input type="radio" class=" w-4 h-4 mt-1 mr-2 align-top transition duration-200 text-gray-600 border border-gray-300" /><span class="ml-2 text-gray-700" >個人</span>
                        </label>

                        <br />
                        <div className='flex items-center'>
                            <input type="radio" class=" w-6 h-4 mt-1 mr-2 align-top transition duration-200 text-gray-600 border border-gray-300" /><span class="ml-2 text-gray-700" >公司</span>
                            <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="統一編號" />
                        </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            郵寄選項
                        </label>
                        <label class="inline-flex items-center ">
                            <input type="checkbox" class=" w-4 h-4 mt-1 mr-2 align-top transition duration-200 text-gray-600 border border-gray-300" /><span class="ml-2 text-gray-700" >實體寄送(+ $30)</span>
                        </label>
                        <label class="inline-flex items-center ">
                            <input type="checkbox" class=" w-4 h-4 mt-1 mr-2 align-top transition duration-200 text-gray-600 border border-gray-300" /><span class="ml-2 text-gray-700" >限時掛號(再 + $30 = 60)</span>
                        </label>
                    </div> */}
                    <ReceiptType />
                </div>
                {/* <div className="flex flex-wrap mb-2 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            City
                        </label>
                        <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque" />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            State
                        </label>
                        <div className="relative">
                            <select className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            Zip
                        </label>
                        <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="90210" />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                            Address
                        </label>
                        <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Street" />
                    </div>
                </div> */}
                <AddressPicker />
            </form>
        </div>
    )
}

export default CheckoutInfoEditorContainer;