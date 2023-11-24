import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Searchbar = (props) => {
    const navigate = useNavigate()
    const [value, setValue] = useState(props.defaultValue)

    const onSearch = (event) => {
        event.preventDefault()
        navigate(`/search?keyword=${value}`)
    }

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <search>
            <form onSubmit={onSearch}>
                <label htmlFor="search">Search: </label>
                <input 
                    id="search" 
                    name="search"
                    placeholder="Search by keyword..."  
                    type="search" 
                    value={value}
                    onChange={onChange}
                />
                <button type="submit" style={{marginLeft: '4px'}}>Search</button>
            </form>
        </search>
    )
}
Searchbar.propTypes = {
    defaultValue: PropTypes.string,
    onSearch: PropTypes.func
}
export default Searchbar