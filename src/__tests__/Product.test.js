import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import productFactory from '../components/Product'

const Product = productFactory( { React, PropTypes } )

describe( 'Product component should', () => {
    it ( 'render without crashing', () => {
        const props = {
            product: {},
            addProduct: () => true,
            removeProduct: () => true,
        }

        ReactDOM.render( <Product { ...props } />, document.createElement( 'div' ) )
    } )
} )
