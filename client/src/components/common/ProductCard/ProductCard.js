import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <article
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1em',
                border: '1px solid #000',
                height: 'auto'
            }}
        >
            <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: '100%', marginBottom: '1em' }}
            />
            <Link to={`/products/${product.id}`} style={{ marginBottom: '.5em' }}>{product.title}</Link>
            <Link to={`/categories?category=${product.category}`} style={{ marginBottom: '.5em' }}>
                {product.category.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' ')}
            </Link>
            <strong>{`AUD ${product.price}`}</strong>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired
}
export default ProductCard
