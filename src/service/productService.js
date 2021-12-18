import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Product from '../model/product';
import Category from '../model/category'

const WooCommerce = new WooCommerceRestApi({
    url: 'http://localhost:8888/', // Your store URL
    consumerKey: 'ck_2d9cb2d318de74c570e72174661fd5ed6115e91e', // Your consumer key
    consumerSecret: 'cs_427c829eb01ec0da199bf9680b294011d9e79c84', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

class ProductService {
    getProducts = (page) => {
        return WooCommerce.get("products", {
            page: page,
            per_page: 4
        })
            .then((response) => {
                const products = response.data.map((rawData) => {
                    return new Product(rawData) //將取得資料傳給pbModel.js
                })
                return products
            })
            .catch((error) => {
                console.log(error)
                return []
            });
    }

    getProductById = (id) => {
        return WooCommerce.get(`products/${id}`, {
        })
            .then((response) => {
                return new Product(response.data)
            })
            .catch((error) => {
                console.log(error)
                return null
            });
    }

    getProductsByIds = (ids) => {
        return WooCommerce.get("products", {
            page: 1,
            include: ids
        })
            .then((response) => {
                const products = response.data.map((rawData) => {
                    return new Product(rawData)
                })
                return products
            })
            .catch((error) => {
                console.log(error)
                return []
            });
    }

    getCategories = () => {
        return WooCommerce.get("products/categories")
            .then((response) => {
                const categories = response.data.map((rawData) => {
                    return new Category(rawData)
                })
                return categories
            })
            .catch((error) => {
                console.log(error)
                return []
            });
    }


    searchProducts = (text, categoryId) => {
        let data = {
            search: text,
            per_page: 100
        }

        if (categoryId !== -1) {
            data["category"] = categoryId
        }
        return WooCommerce.get("products", data).then((response) => {
            const products = response.data.map((rawData) => {
                return new Product(rawData)
            })
            return products
        }).catch((error) => {
            console.log(error);
            return []
        });
    }
}

export default ProductService;