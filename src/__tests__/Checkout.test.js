import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import checkoutFactory from '../components/Checkout'

const Checkout = checkoutFactory( { React, PropTypes } )

describe( 'Checkout component should', () => {
    it ( 'render without crashing', () => {
        const props = {
            cart: [

            ],
        }

        const router = (
            <Router>
                <Route path="/" render={ () => <Checkout { ...props } /> } />
            </Router>
        )

        ReactDOM.render( router, document.createElement( 'div' ) )
    } )
} )
