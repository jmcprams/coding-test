import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({products}) => {
    return (
        <section 
            style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gridTemplateRows: 'masonry',
                gap: '1em'
            }}
        >
            {products.map(product => (
                <ProductCard {...{ key: product.id, product }} />
            ))}
        </section>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string,
    }))
}

ProductList.defaultProps = {
    products: []
}

export default ProductList
