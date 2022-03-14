import React from 'react';
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
                    <ReceiptType />
                </div>
                <AddressPicker />
            </form>
        </div>
    )
}

export default CheckoutInfoEditorContainer;