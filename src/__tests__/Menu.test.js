import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import menuFactory from '../components/Menu'

const Menu = menuFactory( { React, PropTypes } )

describe( 'Menu component should', () => {
    it ( 'render without crashing', () => {
        const props = {
            customer: {
                isLoggedIn: false,
            },
            logoutCustomer: () => true,
            emptyCart: () => true,
        }

        const router = (
            <Router>
                <Route path="/" render={ () => <Menu { ...props } /> } />
            </Router>
        )

        ReactDOM.render( router, document.createElement( 'div' ) )
    } )
} )
