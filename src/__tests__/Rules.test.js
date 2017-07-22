import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import rulesFactory from '../components/Rules'

const Rules = rulesFactory( { React, PropTypes } )

describe( 'Rules component should', () => {
    it ( 'render without crashing', () => {
        const props = {
            cart: [],
            customer: {
                name: 'customer-1',
                isLoggedIn: true,
            },
            customers: [
                {
                    name: 'Customer-1',
                    discounts: [],
                },
                {
                    name: 'Customer-2',
                    discounts: [],
                },
                {
                    name: 'Customer-3',
                    discounts: [],
                },
            ],
            editingRule: {
                productId: '',
                discountType: '',
                deal: [ 1, 1 ],
                from: 1,
                discount: 0,
            },
            updateRule: () => true,
            setProductRule: () => true,
            setDiscountTypeRule: () => true,
            setGetRule: () => true,
            setForRule: () => true,
            setDiscountRule: () => true,
            setFromRule: () => true,
        }

        ReactDOM.render( <Rules { ...props } />, document.createElement( 'div' ) )
    } )
} )
