import React from 'react'
import ReactDOM from 'react-dom'
import notFoundFactory from '../components/NotFound'

const NotFound = notFoundFactory( { React } )

describe( 'NotFound component should', () => {
    it ( 'render without crashing', () => {
        ReactDOM.render( <NotFound />, document.createElement( 'div' ) )
    } )
} )
