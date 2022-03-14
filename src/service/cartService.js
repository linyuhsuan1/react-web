import Cookies from 'js-cookie'

const CART_KEY = "cart"

class CartService {
    constructor() {
        this.cart = Cookies.get(CART_KEY)
        if (this.cart == null || this.cart == "[object Object]") {
            this.clearCartItems();
        } else {
            this.cart = JSON.parse(this.cart)
        }
    }

    static createCartItem = (productId, quantity = 0) => {
        return {
            productId: productId,
            quantity: quantity
        }
    }
    //儲存商品
    save = () => {
        Cookies.set(CART_KEY, JSON.stringify(this.cart));
    }
    //取得商品
    getCartItem = (productId) => {
        const productIdKey = parseInt(productId)
        const cartItem = this.cart[productIdKey]
        if (!cartItem || !this.isCartItemValid(cartItem, productIdKey)) {
            this.removeCartItem(productIdKey)
            return
        }

        return cartItem
    }
    //新增商品
    addInCart = (productId, quantity) => {
        const cartItem = this.getCartItem(productId) || CartService.createCartItem(productId, 0)
        cartItem.quantity += Math.max(1, quantity)
        this.updateCartItem(cartItem)
    }
    //更新商品數量
    updateCartItem = (cartItem) => {
        const { productId } = cartItem
        if (this.isCartItemValid(cartItem, productId)) {

            this.cart[productId] = cartItem
            this.save()
        }
    }
    //移除商品
    removeCartItem = (productId) => {
        this.cart[productId] = null
        this.save()
    }

    isCartItemValid = (cartItem, productId) => {
        return !(cartItem.productId !== productId || cartItem.quantity <= 0)
    }
    //清空所有商品
    clearCartItems() {
        this.cart = {}
        this.save()
    }
    getCartItems = () => {
        return Object.keys(this.cart).map((productId) => {
            return this.getCartItem(productId)
        }).filter(x => x)
    }
}

export default CartService