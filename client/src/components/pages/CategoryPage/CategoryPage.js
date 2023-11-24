import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import Header from '../../common/Header/Header'
import ProductList from '../../common/ProductList/ProductList'
import RedirectHome from '../../common/RedirectHome/RedirectHome'
import api from '../../../utils/api'

const CategoryPage = () => {
    const location = useLocation()
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState()

    const onCategoryClick = (cat) => {
        setCategory(cat)
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const catQuery = params.get('category') 
        api.get('/products/categories')
            .then(res => {
                setCategories(res.data)
                setCategory(res.data.find(({value}) => value === catQuery) || res.data[0])
            })
            .catch(err => console.error(err))
    }, [location.search])

    useEffect(() => {
        const query = queryString.stringify({category: category?.value})
        api.get(`products?${query}`)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))
    }, [category])

    return (
        <BaseLayout>
            <Header title="Categories" toolbar={<RedirectHome />} />
            <div style={{ display: 'flex', gap: '1em' }}>
                <aside>
                    <menu style={{ listStyle: 'none', padding: '0' }}>
                        {categories.map((cat) => (
                            <li 
                                key={cat.value}
                                onClick={() => onCategoryClick(cat)}
                                style={{ 
                                    marginBottom: '.4em', 
                                    cursor: 'pointer', 
                                    fontWeight: category.value === cat.value ? '700' : '300'
                                }}
                            >
                                {cat.name}
                            </li>
                        ))}
                    </menu>
                </aside>
                <main>
                    <ProductList {...{ products }} />
                </main>
            </div>
        </BaseLayout>
    )
}

export default CategoryPage
