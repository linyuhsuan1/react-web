import React , {useState,useEffect, useRef}from 'react' 
import { useParams } from 'react-router-dom';
import ProductService from '../../service/productService';
import LoadingView from '../layout/loadingView';

const productService =new ProductService();
const ProductsShowPage = () => {
    let { id } = useParams();
    let isInited = useRef(false);
    const [product,setProduct] = useState([]);
    console.log('sssss',id)
    useEffect(() => {
        const loadFunc = async () => {
            const result = await productService.getProductById(id)
            isInited.current = true
            setProduct(result)
        }

        loadFunc()
    }, [id])
    return (

        <div>
          this is{id}
        </div>
       
    )
}

export default ProductsShowPage;