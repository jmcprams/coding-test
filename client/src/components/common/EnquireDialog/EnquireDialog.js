import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import api from '../../../utils/api'

const EnquireDialog = (props) => {
    const [params, setParams] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [isOpen, setOpen] = useState(props.open)

    const onSubmit = (event) => {
        event.preventDefault()
        api.post('/enquiries', params)
            .then(() => {
                setSubmitted(true)
            })
            .catch(err => console.error(err))
    }

    const onFieldChange = (key, value) => {
        setParams({ ...params, [key]: value })
    }

    const onClose = () => {
        setOpen(false)
        if (props.onClose) {
            props.onClose()
        }
    }

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    const renderThanks = (
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <header>Thank you for your enquiry!</header>
            <p>Your recent enquiry has been successfully received. Our team is already on it, and we'll be in touch shortly with the information you need.</p>
        </section>
    )

    /**
     * We could create a form provider/controller for the inputs but
     * it requires additional effort. I'll use the traditional way of
     * fetching form values.
     * 
     * @var {ReactElement}
     */
    const renderForm = (
        <>
            <header style={{ marginBottom: '1em' }}>Enquire</header>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: '.5em' }}>
                    <label htmlFor="name"></label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Fullname" 
                        onChange={(e) => onFieldChange('name', e.target.value)} 
                    />
                </div>
                <div style={{ marginBottom: '.5em' }}>
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        onChange={(e) => onFieldChange('email', e.target.value)}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </>
    )

    return createPortal(
        <>
            <div 
                style={{ 
                    display: isOpen ? 'block': 'none',
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,.7)',
                    left: '0',
                    top: '0',
                    width: '100%',
                    height: '100%'
                }}
            />
            <dialog open={isOpen} style={{ position: 'absolute', top: '30%', zIndex: '99999'}}>
                <button style={{ position: 'absolute', right: '.2em', top: '.2em' }} onClick={onClose}>X</button>
                {!submitted && renderForm}
                {submitted && renderThanks}
            </dialog>
        </>,
        document.getElementById('root')
    )
}

export default EnquireDialog
