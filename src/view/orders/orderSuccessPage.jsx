import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
    useParams,
    Link,
    Redirect
} from "react-router-dom";
import OrderService from '../../service/orderService'
import CustomerService from '../../service/customerService'
import LoadingView from '../layout/loadingView';

const orderService = new OrderService()
const customerService = new CustomerService()
const OrderSuccessContent = ({ order }) => {
    return (
        <div style={{ padding: "88px 0", textAlign: "center" }}>
            <h1>訂單建立成功</h1>
            <div>
                你的訂單編號為{order.id}
            </div>
            <div>
                <Link to={`/orders/${order.id}`}>
                    查看{order.id}訂單
                </Link>
            </div>
            <div style={{ paddingTop: "64px" }}>
                <Link to="/orders">
                    <button >所有訂單</button>
                </Link>
            </div>
            <div style={{ paddingTop: "128px" }}>
                <Link to="/">
                    回到首頁
                </Link>
            </div>
        </div>
    )
}
const OrderSuccessPage = () => {
    const { id } = useParams();
    const isInited = useRef(false);
    const [order, setOrder] = useState({});

    useEffect(() => {
        const loadFunc = async () => {
            const result = await orderService.getOrder(id, customerService.getCustomerIdFromCookie())
            isInited.current = true
            setOrder(result)
        }
        loadFunc()
    }, [])

    const initFlag = isInited.current
    const contentView = useMemo(() => {
        if (initFlag) {
            if (order) {
                return (<OrderSuccessContent order={order} />)
            } else {
                return (<Redirect to="/" />)
            }
        } else {
            return (<LoadingView />)
        }
    }, [order, initFlag])
    return contentView
}
export default OrderSuccessPage
