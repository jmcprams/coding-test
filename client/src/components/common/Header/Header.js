import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>{props.title}</h1>
            {!!props.toolbar && props.toolbar}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    withSearch: PropTypes.bool
}

export default Header
