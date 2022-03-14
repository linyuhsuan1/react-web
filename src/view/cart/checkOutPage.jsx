import React, { useEffect, useState, useContext, useRef } from 'react';
import CartContext from '../../context/cartContext';
import OrderService from '../../service/orderService';
import CartService from '../../service/cartService';
import CustomerService from '../../service/customerService'
import IsLogInContext from '../../context/isLoginContext';
import CheckoutInfoEditorContainer from './hooks/checkoutInfoEditorContainer';
import ExtraCheckoutInfroContext from '../../context/extraCheckoutInfroContext';
import CheckoutInfoContext from '../../context/checkoutInfoContext';

const customerService = new CustomerService()
const orderService = new OrderService();
const cartService = new CartService();
const data = {
    payment_method: "bacs",
    payment_method_title: "銀行轉帳",
    set_paid: false,
    billing: {
        first_name: "小明",
        last_name: "王",
        address_1: "信義路五段7號89樓",
        address_2: "",
        city: "信義區",
        state: "台北市",
        postcode: "110",
        country: "TW",
        email: "demo.progressbar.tw@gmail.com",
        phone: "0912345678"
    },
    shipping: {
        first_name: "小明",
        last_name: "王",
        address_1: "信義路五段7號89樓",
        address_2: "",
        city: "信義區",
        state: "台北市",
        postcode: "110",
        country: "TW",
    },
    line_items: [],
    shipping_lines: [
        {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "10"
        }
    ],
    customer_id: customerService.getCustomerIdFromCookie()
};
const CheckoutPage = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submitData, setSubmitData] = useState(data)
    const [extraSubmitData, SetExtraSubmitData] = useState({
        receiptType: "2",
        taxId: "",
        receiptOptions: ["byMail"],
        first_name: "",
        last_name: "",
    })
    const [cartItemDetails] = useContext(CartContext);
    const isReady = useRef(false)


    submitData.line_items = cartItemDetails.map((item) => {
        return {
            product_id: item.product.id,
            quantity: item.quantity
        }
    })
    useEffect(() => {
        orderService.getPaymentGatways()
        orderService.getShippingMethods()
    }, [])
    // if (isLogin == false) {
    //     //customerService.setShouldBackToCheckout()
    //     window.location.replace("/login")
    //     return null
    // }
    const getButtonText = () => {
        if (submitting) {
            return "結帳中...請稍後"
        } else if (!isReady.current) {
            return "資料填寫不完整, 無法結帳"
        } else {
            return "結帳"
        }
    }
    return (
        <CheckoutInfoContext.Provider value={[submitData, setSubmitData, isReady]} >
            <ExtraCheckoutInfroContext.Provider value={[extraSubmitData, SetExtraSubmitData]}>
                <div>
                    <CheckoutInfoEditorContainer />
                    <div className="flex justify-center block px-4 py-0 transition-colors text-normal" >
                        <button className="p-2 text-sm text-white bg-gray-500 rounded" onClick={
                            () => {
                                setSubmitting(true)
                                const submitOrde = async () => {
                                    console.log('[結帳資訊]', submitData)
                                    const order = await orderService.submitOrder(submitData);

                                    if (order) {
                                        cartService.clearCartItems();
                                        window.location.replace(`/orders/${order.id}/success`);
                                    } else {
                                        window.location.replace(`/orders/fail`);
                                    }
                                }
                                submitOrde();
                            }
                        } disabled={!isReady.current || submitting}>{getButtonText()}</button>
                    </div>
                </div >
            </ExtraCheckoutInfroContext.Provider>
        </CheckoutInfoContext.Provider>
    )
}
export default CheckoutPage
