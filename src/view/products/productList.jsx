import React from 'react'; 

const OnSalePrice = ({product}) => {
    return (
        <>
            <del style={{color: "red"}}>
                {product.regularPrice}
            </del> <b>${product.price}</b>
        </>
    )
} 
const ProductsList = ({product}) => {
    const isDiscont = product.onSale ?<OnSalePrice product={product} /> : (<>${product.price}</>)
    
    return (
        <div className="w-1/2 mb-12 mr-4">
        <div className="flex max-w-md overflow-hidden bg-gray-400 rounded-lg shadow-lg">
            <div className="w-1/2 bg-cover" >
                <img src={product.imageUrl} />
            </div> 
            <div className="w-1/2 p-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.id}</h1>
            <p className="mt-2 text-sm text-gray-600">{product.name}</p>
            {/*  dangerouslySetInnerHTML={{__html:傳入值}}如果值原本為html格式, 需使用此方式此方式才能引入 */}
            <p className="mt-2 text-sm text-gray-600" dangerouslySetInnerHTML={{__html:product.description}}></p>
            <div className="flex justify-between mt-3 item-center">
                <h1 className="text-xl font-bold text-gray-700">{isDiscont}</h1>
            </div>
            </div>
        </div>
        </div>
        
    )
}

export default ProductsList;