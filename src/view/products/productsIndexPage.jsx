import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import photo_1 from '../../../src/picture/photo_1.jpeg';
import photo_2 from '../../../src/picture/photo_2.jpeg';
import photo_3 from '../../../src/picture/photo_3.jpeg';
import ProductsList from './productList';
import ProductService from '../../service/productService';
import LoadingView from '../layout/loadingView';
import ProductSearchPage from './productSearchPage';
import SwiperCore, { Pagination , Autoplay } from 'swiper';
SwiperCore.use([Autoplay,Pagination]);

const productService = new ProductService();
const ProductsIndexPage = () => {
    let picArray=[photo_1,photo_2,photo_3];
    let isInited = useRef(false);
    let page = useRef(1);
    let isLastPage = useRef(false);
    const [products, setProducts] = useState([]);
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

    useEffect(() => {
        const loadFunc = async () => {
            const result = await productService.getProducts(page.current);
            isInited.current = true;
            setProducts([
                ...products,
                ...result
            ])
        }
        loadFunc()
    }, [productService])
    return (
        <>
            <div className="container flex flex-col w-full h-screen mx-auto swiper sm:h-[100]">
                <Swiper pagination={true} autoplay={{delay:3000,disableOnInteraction:false}} className="swiper-container">
                {
                    picArray.map((pic) => {
                        return (
                            <SwiperSlide>
                            <div className="p-4">
                                <div className="overflow-hidden rounded-lg h-[525px]">
                                <img className="object-cover object-center w-full h-full" src={pic}/>
                                </div>
                            </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div> 
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-24 pb-8 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((product) => {
                                return (
                                    <ProductsList key={product.id} product={product} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="flex justify-center mb-[4%]">
                {
                    isLastPage.current ?
                        (<p>this is last page</p>) :
                        (<button className="px-3 py-2 text-xs font-bold text-center text-white bg-gray-800 rounded" onClick={loadMoreProducts}>顯示更多</button>)
                }
            </div>
        </>
    )
}

export default ProductsIndexPage;