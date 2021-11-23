import React from 'react'

import ProductsIndexPage from '../products/productsIndexPage'
import HomePage from '../home/HomePage';
import ProductsShowPage from '../products/productsShowPage'
// import OrdersIndexPage from '../orders/ordersIndexPage'
// import OrdersShowPage from '../orders/ordersShowPage'
// import OrderSuccessPage from '../orders/orderSuccessPage'
// import OrderFailedPage from '../orders/orderFailedPage'
import CartIndexPage from '../cart/cartIndexPage'
// import CheckoutPage from '../cart/checkoutPage'
// import NoMatch from '../errors/404'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

const Routes = () => {
    return (<>
     <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/products" exact>
                <ProductsIndexPage />
            </Route>
            <Route path="/products/:id" exact>
                <ProductsShowPage />
            </Route>
            <Route path="/cart" exact>
                <CartIndexPage />
            </Route>

            {/*
            <Route path="/orders" exact>
                <OrdersIndexPage />
            </Route>
            <Route path="/orders/:id" exact>
                <OrdersShowPage />
            </Route>
            <Route path="/orders/:id/success" exact>
                <OrderSuccessPage />
            </Route>
            <Route path="/orders/:id/failed" exact>
                <OrderFailedPage />
            </Route>
            <Route path="/cart" exact>
                <CartIndexPage />
            </Route>
            <Route path="/checkout" exact>
                <CheckoutPage />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route> */}
        </Switch>
    </>)
}

export default Routes;