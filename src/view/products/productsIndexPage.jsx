import React, {useState,useEffect} from 'react'; 
import ProductsList from './productList';
import ProductService from '../../service/productService';


const productService =new ProductService();
const ProductsIndexPage = () => {
    const [products,setProducts] = useState([]);
   
    useEffect (() =>{
        const loadFunc = async () =>{
            const result = await  productService.getProducts(1);
            console.log('lasss',...result)
            setProducts([
                ...products,
                ...result
            ])
            console.log("ddddd",products)
        }
        loadFunc()
    },[productService])
    return (
        <div className="flex flex-row ml-20"> 
              {
                products.map((product) => {
                    return (
                        <ProductsList key={product.id}  product={product}/>
                    )
                })
            }
        </div>
    )
}

export default ProductsIndexPage;