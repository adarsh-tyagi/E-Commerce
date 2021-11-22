import React, { useEffect } from 'react'
import "./Products.css"
import {useSelector, useDispatch} from 'react-redux'
import {clearErrors, getProduct} from "../../actions/productAction"
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import { useParams } from 'react-router'

function Products() {
    const dispatch = useDispatch()
    const {products, loading, error, productsCount} = useSelector(state => state.products)

    const {keyword} = useParams()

    useEffect(()=>{
        dispatch(getProduct(keyword))
    }, [dispatch, keyword])

    return (
        <React.Fragment>
            {loading ? <Loader /> : (
                <React.Fragment>
                    <h2 className="productsHeading">Products</h2>
                    <div className="products">
                        {products && products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Products