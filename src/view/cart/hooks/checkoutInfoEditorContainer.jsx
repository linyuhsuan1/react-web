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
                receiptOptions: ["byMail"],
                first_name: "",
                last_name: "",
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
        const { receipt } = state
        const newAddress = {
            first_name: receipt.first_name,
            last_name: receipt.last_name,
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
        <div className="flex items-center justify-center mt-6 iphoneX:mt-0">
            <form className="w-full max-w-lg iphoneX:p-4">
                <div className="flex flex-wrap mb-6 -mx-3">
                    <ReceiptType
                        handler={handler}
                        receipt={state.receipt}
                    />
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