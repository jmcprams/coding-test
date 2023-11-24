import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useParams } from 'react-router-dom'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import EnquireDialog from '../../common/EnquireDialog/EnquireDialog'
import RedirectHome from '../../common/RedirectHome/RedirectHome'
import api from '../../../utils/api'

const ProductPage = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [enquireOpen, setEnquireOpen] = useState(false)

    const onEnquire = () => {
        setEnquireOpen(true)
    }

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id])

    if (!product) {
        return null
    }

    return (
        <BaseLayout>
            <RedirectHome />
            <article style={{ display: 'flex', gap: '1em', alignItems: 'center'}}>
                <img src={product.image} alt={product.title} style={{ width: '50%' }}/>
                <section>
                    <header style={{ fontWeight: '700', marginBottom: '.5em' }}>{product.title}</header>
                    <span>{`AUD ${product.price}`}</span>
                    <p>{product.description}</p>
                    <button style={{ backgroundColor: '#000', color: '#FFF'}} onClick={onEnquire}>Enquire</button>
                </section>
            </article>
            {<EnquireDialog open={enquireOpen} onClose={() => setEnquireOpen(false)} />}
        </BaseLayout>
    )
}

export default ProductPage
