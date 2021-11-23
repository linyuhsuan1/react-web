import React, {useState,useEffect, useRef, useCallback} from 'react'; 
import ProductsList from './productList';
import ProductService from '../../service/productService';
import LoadingView from '../layout/loadingView';

const productService =new ProductService();
const ProductsIndexPage = () => {

    let isInited = useRef(false);
    let page = useRef(1);
    let isLastPage = useRef(false);
    const [products,setProducts] = useState([]);
    const loadMoreProducts = useCallback(async () => {
        if (isLastPage.current) {
            return;
        }

        page.current += 1
        const result = await productService.getProducts(page.current);
        if (result && result.length > 0) {
            setProducts([
                ...products,
                ...result
            ])
        } else {
            page.current -= 1;
            isLastPage.current = true;
            setProducts([
                ...products
            ])
        }
    }, [products])
    
    useEffect (() =>{
        const loadFunc = async () =>{
            const result = await  productService.getProducts(page.current);
            isInited.current = true;
            setProducts([
                ...products,
                ...result
            ])
        }
        loadFunc()
    },[productService])
    return (
        isInited.current ?
        (<>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            {
                products.map((product) => {
                    return (
                        <ProductsList key={product.id}  product={product}/>
                    )
                })
            }
            </div>
        </div>
        </section>
        <div className="flex justify-center">
            {
                isLastPage.current ? 
                (<p>this is last page</p>) : 
                (<button className="px-3 py-2 text-xs font-bold text-center text-white bg-gray-800 rounded" onClick={loadMoreProducts}>loading</button>)
            }
        </div>
        </>):
        (<LoadingView />)  
    )
}

export default ProductsIndexPage;