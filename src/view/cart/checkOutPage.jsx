import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../../context/cartContext';
import OrderService from '../../service/orderService';
import CartService from '../../service/cartService';
import CustomerService from '../../service/customerService'
import IsLogInContext from '../../context/isLoginContext';

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
    const [submitting, setSubmitting] = useState(false)
    const { shipping } = data;
    const buttonText = (submitting) ? "結帳中...請稍後" : "結帳";
    const [cartItemDetails] = useContext(CartContext);
    const [isLogin, setIsLogin] = useContext(IsLogInContext)


    data.line_items = cartItemDetails.map((item) => {
        return {
            product_id: item.product.id,
            quantity: item.quantity
        }
    })
    useEffect(() => {
        orderService.getPaymentGatways()
        orderService.getShippingMethods()
    }, [])
    if (isLogin == false) {
        console.log('ffff', isLogin)
        //customerService.setShouldBackToCheckout()
        window.location.replace("/login")
        return null
    }
    return (
        <div>
            <p>{data.last_name}{data.first_name}</p>
            <p>{data.email}</p>
            <p>{shipping.postcode}{shipping.country}{shipping.state}{shipping.city}{shipping.address_1}</p>
            <p>{data.payment_method_title}</p>
            <p>{data.shipping_lines[0].method_title}</p>
            <div className="flex justify-center block px-4 py-0 transition-colors text-normal" >
                <button className="p-2 text-sm text-white bg-gray-500 rounded" onClick={
                    () => {
                        setSubmitting(true)
                        const submitOrde = async () => {
                            const order = await orderService.submitOrder(data);

                            if (order) {
                                cartService.clearCartItems();
                                window.location.replace(`/orders/${order.id}/success`);
                            } else {
                                window.location.replace(`/orders/fail`);
                            }
                        }
                        submitOrde();
                    }
                } disabled={submitting}>{buttonText}</button>
            </div>
        </div>
    )
}
export default CheckoutPage
