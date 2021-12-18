import React, { useEffect } from 'react'


const removeValueFromArray = (array, value) => {
    return array.filter((element) => {
        return element !== value
    })
}

const ReceiptType = ({ receipt, handler }) => {
    const { receiptType, taxId, receiptOptions } = receipt

    const inputHandler = (e) => {
        const { name, value } = e.target
        console.log('dddddd', receipt)
        handler("receipt", { ...receipt, [name]: value })
    }
    // 未調整事項：checkbox點擊
    const checkboxHandler = (e) => {
        // const checkboxParent = e.target.closest('.mdc-checkbox')
        // const newValue = e.target.value
        // const name = "byMail"
        // let values = receipt[name]
        // if (values.includes(newValue)) {
        //     values = removeValueFromArray(values, newValue)
        // } else {
        //     values.push(newValue)
        // }

        // if (name === "receiptOptions" && !values.includes("byMail")) {
        //     values = []
        // }

        // handler("receipt", { ...receipt, [name]: values })
    }

    useEffect(() => {
        // document.getElementById("byMail").value = "byMail"
        // document.getElementById("promptRegistered").value = "promptRegistered"
    }, [])

    return (
        <>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                    發票類型
                </label>
                <label className="inline-flex items-center ">
                    <input type="radio"
                        name='receiptType'
                        value='2'
                        id='personal'
                        onChange={inputHandler}
                        checked={receiptType === "2"}
                        className="w-4 h-4 mt-1 mr-2 text-gray-600 align-top transition duration-200 border border-gray-300 " /><span className="ml-2 text-gray-700" >個人</span>
                </label>
                <br />
                <div className='flex items-center'>
                    <input type="radio"
                        value='3'
                        name='receiptType'
                        id='company'
                        onChange={inputHandler}
                        checked={receiptType === "3"}
                        className="w-6 h-4 mt-1 mr-2 text-gray-600 align-top transition duration-200 border border-gray-300 " /><span className="ml-2 text-gray-700" >公司</span>
                    <input
                        name="taxId"
                        value={taxId}
                        id='taxId'
                        onChange={inputHandler}
                        className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="統一編號" />
                </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                    郵寄選項
                </label>
                <label className="inline-flex items-center ">
                    <input type="checkbox"
                        name="receiptOptions[]"
                        attributeName="receiptOptions"
                        checked={receiptOptions.includes("byMail")}
                        onChange={checkboxHandler}
                        className="w-4 h-4 mt-1 mr-2 text-gray-600 align-top transition duration-200 border border-gray-300 " /><span className="ml-2 text-gray-700" htmlFor='byMail'>實體寄送(+ $30)</span>
                </label>
                <label className="inline-flex items-center ">
                    <input type="checkbox"
                        name="receiptOptions[]"
                        attributeName="receiptOptions"
                        checked={receiptOptions.includes("promptRegistered")}
                        disabled={
                            !receiptOptions.includes("byMail")
                        }
                        onChange={checkboxHandler}
                        className="w-4 h-4 mt-1 mr-2 text-gray-600 align-top transition duration-200 border border-gray-300 " /><span className="ml-2 text-gray-700" htmlFor='promptRegistered'>限時掛號(再 + $30 = 60)</span>
                </label>
            </div>
        </>
    )
}

export default ReceiptType;