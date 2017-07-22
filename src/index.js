import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/style.css'
import 'react-select/dist/react-select.css'
import appContainerFactory from './components/AppContainer'
import { Provider } from 'react-redux';
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'

const AppContainer = appContainerFactory( { React, PropTypes } )

const router = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ AppContainer } />
        </Router>
    </Provider>
)

render( router, document.getElementById( 'root' ) )
registerServiceWorker()
