import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Customer from '../model/customer'
import Cookies from 'js-cookie'

const CUSTOMER_KEY = "customer"

const WooCommerce = new WooCommerceRestApi({
    url: 'http://localhost:8888/', // Your store URL
    consumerKey: 'ck_2d9cb2d318de74c570e72174661fd5ed6115e91e', // Your consumer key
    consumerSecret: 'cs_427c829eb01ec0da199bf9680b294011d9e79c84', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

class CustomerService {
    constructor() {
        this.customerStorage = Cookies.get(CUSTOMER_KEY)
        if (this.customerStorage == null || this.customerStorage == "[object Object]") {
            this.clearCustomerStorage()
        } else {
            this.customerStorage = JSON.parse(this.customerStorage)
        }
    }

    clearCustomerStorage = () => {
        this.customerStorage = {}
        this.saveToCustomerStorage()
    }

    saveToCustomerStorage = () => {
        Cookies.set(CUSTOMER_KEY, JSON.stringify(this.customerStorage), { expires: 7 })
    }

    setCustomerIdToCookie = (customerId) => {
        this.customerStorage["customerId"] = customerId
        this.saveToCustomerStorage()
    }
    setShouldBackToCheckout = () => {
        this.customerStorage["setShouldBackToCheckout"] = true
        this.saveToCustomerStorage()
    }

    clearShouldBackToCheckout = () => {
        this.customerStorage["setShouldBackToCheckout"] = null
        this.saveToCustomerStorage()
    }

    get shouldBackToCheckout() {
        //return !!this.customerStorage["setShouldBackToCheckout"]
        return this.customerStorage["setShouldBackToCheckout"] = true
    }
    get isLoggedIn() {
        return this.getCustomerIdFromCookie() !== null
    }

    getCustomerIdFromCookie = () => {
        return this.customerStorage["customerId"]
    }

    getCustomerById = (id) => {
        return WooCommerce.get(`customers/${id}`)
            .then((response) => {
                const customer = new Customer(response.data)
                this.setCustomerIdToCookie(customer.id)
                return customer
            })
            .catch((error) => {
                console.log(error.response.data);
                return null
            });
    }

    logIn = (email) => {
        return WooCommerce.get("customers", {
            email: email,
            role: "all"
        })
            .then((response) => {

                if (response.data.length > 0) {
                    const customer = new Customer(response.data[0])
                    this.setCustomerIdToCookie(customer.id)
                    return customer
                } else {
                    return null
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                return null
            });
    }

    logOut = () => {
        this.customerStorage["customerId"] = null
        this.saveToCustomerStorage()
    }

    signUp = (data) => {
        return WooCommerce.post("customers", data)
            .then((response) => {
                const customer = new Customer(response.data)
                this.setCustomerIdToCookie(customer.id)
                return customer
            })
            .catch((error) => {
                console.log(error.response.data);
                return null
            });
    }
}



export default CustomerService