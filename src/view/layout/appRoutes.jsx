import React, { useContext } from 'react';
import LoginPage from '../customer/loginPage'
import ProductsIndexPage from '../products/productsIndexPage'
import HomePage from '../home/HomePage';
import ProductsShowPage from '../products/productsShowPage'
import CheckoutPage from '../cart/checkOutPage';
import OrdersIndexPage from '../orders/ordersIndexPage';
import OrdersShowPage from '../orders/ordersShowPage';
import OrderSuccessPage from '../orders/orderSuccessPage';
import OrderFailedPage from '../orders/orderFailedPage';
import CartIndexPage from '../cart/cartIndexPage';
import SignPage from '../customer/signPage';
// import NoMatch from '../errors/404'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import IsLogInContext from '../../context/isLoginContext';
import CustomerService from '../../service/customerService';

const customerService = new CustomerService()
const Routes = () => {
    const [isLogin, setIsLogin] = useContext(IsLogInContext)
    return (<BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Switch>
            <Route path="/" exact>
                <ProductsIndexPage />
            </Route>

            {/* <Route path="/signup" exact>
                <SignPage />
            </Route> */}
            {/* <Route path="/home" exact>
                <HomePage />
            </Route> */}
            <Route path="/products" exact>
                <ProductsIndexPage />
            </Route>
            <Route path="/products/:id" exact>
                <ProductsShowPage />
            </Route>
            <Route path="/cart" exact>
                <CartIndexPage />
            </Route>
            <Route path="/checkout" exact>
                <CheckoutPage />
            </Route>
            <Route path="/orders" exact>
                <OrdersIndexPage />
            </Route>
            <Route path="/orders/:id" exact>
                <OrdersShowPage />
            </Route>
            <Route path="/orders/:id/success" exact>
                <OrderSuccessPage />
            </Route>
            <Route path="/orders/failed" exact>
                <OrderFailedPage />
            </Route>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Route path="/signup" exact>
                <SignPage />
            </Route>
            <Route
                path="/logout" exact
                render={() => {
                    customerService.logOut()
                    setIsLogin(false)
                    return <Redirect to="/" />
                }
                }
            />
            {/* <Route
                path="/logout" exact
                render={() => {
                    customerService.logOut()
                    setIsLogin(false)
                    return <Redirect to="/" />
                }
                }
            /> */}
            {/* <Route path="*">
                <NoMatch />
            </Route> */}
        </Switch>
        </BrowserRouter>)
}

export default Routes;