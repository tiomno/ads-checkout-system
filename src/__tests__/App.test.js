import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import appFactory from '../components/App'

const App = appFactory( { React, PropTypes } )

describe( 'App component should', () => {
    it ( 'render without crashing', () => {
        const props = {
            customer: {
                isLoggedIn: false,
            },
            customers: [
                { name: 'Customer-1', },
                { name: 'Customer-2', },
                { name: 'Customer-3', },
            ],
            logoutCustomer: () => true,
            emptyCart: () => true,
            setCustomer: () => true,
            loginCustomer: () => true,
        }

        const router = (
            <Router>
                <Route path="/" render={ () => <App { ...props } /> } />
            </Router>
        )

        ReactDOM.render( router, document.createElement( 'div' ) )
    } )
} )
