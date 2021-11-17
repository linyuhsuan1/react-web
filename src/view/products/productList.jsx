import React from 'react'; 

const ProductsList = ({product}) => {
    console.log("list",product)
    return (
        <div className="w-1/2 mb-12 mr-4">
        <div className="flex max-w-md overflow-hidden bg-gray-400 rounded-lg shadow-lg">
            <div className="w-1/2 bg-cover">
            <h1 className="text-2xl font-bold text-gray-900">pir</h1>
                {/* 照片擺放位置 */}
            </div> 
            <div className="w-1/2 p-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.id}</h1>
            <p className="mt-2 text-sm text-gray-600">{product.name}</p>
            <div className="flex justify-between mt-3 item-center">
                <h1 className="text-xl font-bold text-gray-700">$220</h1>
                <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">Add to Card</button>
            </div>
            </div>
        </div>
        </div>
    )
}
export default ProductsList;