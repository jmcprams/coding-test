import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import Header from '../../common/Header/Header'
import Searchbar from '../../common/Searchbar/Searchbar'
import ProductList from '../../common/ProductList/ProductList'
import api from '../../../utils/api'

/**
 * I used traditional styling of components because I need to focus
 * on the essentials. But in real app, I'll include and optimize
 * CSS/styles files using a bundler.
 * 
 * @returns {ReactElement}
 */
const HomePage = () => {
    const [topRateds, setTopRateds] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const query = queryString.stringify({topRated: 1})
        api.get(`/products?${query}`)
            .then((res) => setTopRateds(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoaded(true))
    }, [])

    return (
        <BaseLayout>
            <Header 
                title="HomePage"
                toolbar={<Searchbar />} 
            />
            {!loaded ? <span>Loading products...</span> : <ProductList products={topRateds} />}
        </BaseLayout>
    )
}

export default HomePage
