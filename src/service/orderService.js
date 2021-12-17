import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Order from '../model/order';

const WooCommerce = new WooCommerceRestApi({
    url: 'http://localhost:8888/', // Your store URL
    consumerKey: 'ck_2d9cb2d318de74c570e72174661fd5ed6115e91e', // Your consumer key
    consumerSecret: 'cs_427c829eb01ec0da199bf9680b294011d9e79c84', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});
class OrderService {
    submitOrder = (data) => {
        if (!data.customer_id) {
            return new Promise((resolve) => {
                resolve(null)
            })
        }

        return WooCommerce.post("orders", data)
            .then((response) => {
                return new Order(response.data);
            }).catch((error) => {
                console.log(error);
                return null
            });
    }

    getOrder = (id, customer_id = null) => {
        if (!customer_id) {
            return new Promise((resolve) => {
                resolve(null)
            })
        }

        return WooCommerce.get(`orders`, {
            customer: customer_id,
            include: [id]
        }).then((response) => {
            const result = response.data.map((rawData) => {
                return new Order(rawData)
            });

            if (result.length > 0) {
                return result[0]
            } else {
                return null
            }
        }).catch((error) => {
            console.log(error);
            return null
        });
    }

    getOrders = (customer_id) => {
        if (!customer_id) {
            return new Promise((resolve) => {
                resolve(null)
            })
        }

        return WooCommerce.get('orders', {
            customer: customer_id
        }).then((response) => {
            return response.data.map((rawData) => {
                return new Order(rawData)
            });
        }).catch((error) => {
            console.log(error);
            return null
        });
    }

    getPaymentGatways = () => {
        return WooCommerce.get("payment_gateways")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    getShippingMethods = () => {
        return WooCommerce.get("shipping_methods")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }
}

export default OrderService;