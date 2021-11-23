import React from 'react'; 

const CrncFormat = ({product}) => {
    return (
        <>
            <del style={{color: "gray"}}>
                NT. {product.regularPrice}
            </del> <b>NT. {product.price}</b>
        </>
    )
} 

export default CrncFormat;