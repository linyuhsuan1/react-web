import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Product from '../model/product';

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/', // Your store URL
  consumerKey: 'ck_2d9cb2d318de74c570e72174661fd5ed6115e91e', // Your consumer key
  consumerSecret: 'cs_427c829eb01ec0da199bf9680b294011d9e79c84', // Your consumer secret
  version: 'wc/v3' // WooCommerce WP REST API version
});

class ProductService{
    getProducts =() =>{
      return  WooCommerce.get("products", {
        //   page:page,
        //   per_page:3
      })
        .then((response) => {
            const products = response.data.map((rawData) => {
                return new Product(rawData) //將取得資料傳給pbModel.js
            })
            return products
        })
        .catch((error) => {
            return []
        }); 
    }
}

export default ProductService;