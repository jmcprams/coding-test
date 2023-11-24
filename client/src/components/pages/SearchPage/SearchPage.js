import React, { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import Header from '../../common/Header/Header'
import Searchbar from '../../common/Searchbar/Searchbar'
import ProductList from '../../common/ProductList/ProductList'
import api from '../../../utils/api'

/**
 * I assumed that using search bar redirects users to a "search"
 * page where it displays the results. It was not specified
 * if it should stay on the same page or not.
 * 
 * @returns {ReactElement}
 */
const SearchPage = () => {
    const [products, setProducts] = useState([])
    const location = useLocation()
    
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const keyword = params.get('keyword') || ''
        const query = queryString.stringify({ keyword })
        api.get(`/products?${query}`)
            .then((res) => setProducts(res.data))
            .catch(err => console.error(err))
    }, [location.search])

    return (
        <BaseLayout>
            <Header title="Search" toolbar={<Searchbar />} />
            <ProductList {...{ products }} />
        </BaseLayout>
    )
}

export default SearchPage
