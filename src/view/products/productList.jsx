import React from 'react';
import { Link } from "react-router-dom";
import CrncFormat from './component/crncFormat';

const ProductsList = ({ product }) => {
    const url = `/products/${product.id}`
    const isDiscont = product.onSale ? <CrncFormat product={product} /> : (<>NT. {product.regularPrice}</>)

    return (
        <div className="w-full p-4 lg:w-1/4 md:w-1/2">
            <Link to={url}>
                <div className="relative block h-48 overflow-hidden rounded">
                    <img className="block object-cover object-center w-full h-full" src={product.imageUrl} />
                </div>
                <div className="mt-4">
                    {/* <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{product.id}</h3> */}
                    <h2 className="text-lg font-medium text-gray-900 title-font">{product.name}</h2>
                    {/*  dangerouslySetInnerHTML={{__html:傳入值}}如果值原本為html格式, 需使用此方式此方式才能引入 */}
                    {/* <p className="mt-1" dangerouslySetInnerHTML={{ __html: product.description }}></p> */}
                    <p className="mt-1">{isDiscont}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductsList;