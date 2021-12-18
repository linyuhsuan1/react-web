import React, { useContext, useState } from 'react';
import ReceiptType from './receiptType';
import AddressPicker from './addressPicker';
import TaiwanPostalCode from './TaiwanPostalCode.json';
import CheckoutInfoContext from '../../../context/checkoutInfoContext'
const CheckoutInfoEditorContainer = () => {
    const [submitData, setSubmitData, isReady] = useContext(CheckoutInfoContext)
    const [state, setState] = useState(
        {
            receipt: {
                receiptType: "2",
                taxId: "",
                receiptOptions: ["byMail"]
            },
            fullAddress: {
                city: "新竹市",
                district: "",
                postalCode: "",
                address: ""
            }
        }
    )

    const checkIsReceiptTypeReady = (receipt) => {
        let result = false
        const { receiptType, taxId } = receipt
        if (receiptType === "2") {
            result = true
        } else if (receiptType === "3" && taxId !== "") {
            result = true
        }

        return result
    }

    const checkIsAddressReady = (fullAddress) => {
        const { city, district, postalCode, address } = fullAddress
        if (city !== "" && district !== "" && postalCode !== "" && address !== "") {
            return true
        }
        return false
    }

    const updateContextValue = () => {
        const { fullAddress } = state
        const newAddress = {
            address_1: fullAddress.address,
            address_2: "",
            city: fullAddress.district,
            state: fullAddress.city,
            postcode: fullAddress.postalCode,
        }
        setSubmitData({
            ...submitData,
            billing: {
                ...submitData.billing,
                ...newAddress
            },
            shipping: {
                ...submitData.shipping,
                ...newAddress
            }
        })
    }

    const handler = (name, value) => {
        setState({ ...state, [name]: value })
        isReady.current = (
            checkIsReceiptTypeReady(
                (name === "receipt" ? value : state.receipt)
            )
            && checkIsAddressReady(
                (name === "fullAddress" ? value : state.fullAddress)
            )
        )
        updateContextValue()
    }
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
                    <ReceiptType
                        handler={handler}
                        receipt={state.receipt} />
                </div>
                <AddressPicker
                    handler={handler}
                    fullAddress={state.fullAddress}
                    taiwanPostalCodes={TaiwanPostalCode}
                />
            </form>
        </div>
    )
}

export default CheckoutInfoEditorContainer;