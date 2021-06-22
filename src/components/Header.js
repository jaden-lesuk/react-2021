import React from 'react'
import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onToggle, showAddTask}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && 
                <Button color={!showAddTask ? 'green': 'red'} text={!showAddTask ? 'Add': 'Close'} onClick={() => onToggle()}/>
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Nope"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
