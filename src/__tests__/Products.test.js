import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import productsFactory from '../components/Products'

const Products = productsFactory( { React, PropTypes } )

describe( 'Products component should', () => {
    it ( 'render without crashing', () => {
        const props = {
            cart: [],
        }

        const router = (
            <Router>
                <Route path="/" render={ () => <Products { ...props } /> } />
            </Router>
        )

        ReactDOM.render( router, document.createElement( 'div' ) )
    } )
} )
