import React, { useState, useContext } from 'react';
import CustomerService from '../../service/customerService'
import IsLogInContext from '../../context/isLoginContext';

const customerService = new CustomerService()

const LoginPage = () => {
    const [uiStatus, setUIStatus] = useState({
        email: "",
        password: "",
        isLoading: false
    })

    const [isLogin, setIsLogin] = useContext(IsLogInContext)

    const typeInInput = (e) => {
        const { value, name } = e.target
        setUIStatus({ ...uiStatus, [name]: value })
    }

    const tryToLogin = async (e) => {
        setUIStatus({ ...uiStatus, isLoading: true })
        const result = await customerService.logIn(uiStatus.email, uiStatus.password)
        if (customerService.isLoggedIn) {
            setIsLogin(customerService.isLoggedIn)
            if (customerService.shouldBackToCheckout) {
                customerService.clearShouldBackToCheckout()
                window.location.replace("/checkout")
            } else {
                window.location.replace("/")
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none sm:text-sm"
                                    placeholder="Email address"
                                    value={uiStatus.email}
                                    onChange={typeInInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none sm:text-sm"
                                    placeholder="Password"
                                    value={uiStatus.password}
                                    onChange={typeInInput}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {
                                uiStatus.isLoading ? (
                                    <button
                                        type="button"
                                        className="relative w-1/2 p-2 font-medium text-white bg-blue-600 border border-transparent rounded-md text-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                        disabled={true}>
                                        Login
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="relative w-1/2 p-2 font-medium text-white bg-blue-600 border border-transparent rounded-md text-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                        onClick={tryToLogin}>
                                        Login
                                    </button>
                                )
                            }

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage