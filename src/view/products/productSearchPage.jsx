import React, { useState, useContext } from 'react'
import ProductService from '../../service/productService'
const productService = new ProductService();

function ProductSearchPage() {
    const [searchText, setSearchText] = useState("")
    const [products, setProducts] = useState([])

    const searchProducts = async (text) => {
        const resultProducts = await productService.searchProducts(
            text
        )
        if (resultProducts) {
            setProducts(resultProducts)
        }
    }
    const textChange = (e) => {
        const { value } = e.target
        setSearchText(value)
    }

    return (
        <>
            <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        value={searchText}
                        onChange={textChange}
                    />
                </div>
                <div className="md:w-2/3">
                    <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" type="button">
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductSearchPage