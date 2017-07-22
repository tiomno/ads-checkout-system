import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import loginFormFactory from '../components/LoginForm'

const LoginForm = loginFormFactory( { React, PropTypes } )

describe( 'LoginForm component should', () => {
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
            setCustomer: () => true,
            loginCustomer: () => true,
        }

        ReactDOM.render( <LoginForm { ...props } />, document.createElement( 'div' ) )
    } )
} )
