import React from 'react'

const BaseLayout = (props) => {
    return (
        <div style={{maxWidth: '720px', margin: '24px auto 0'}}>
            {props.children}
        </div>
    )
}

export default BaseLayout
