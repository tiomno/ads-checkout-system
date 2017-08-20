import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cart from './cart'
import customer from './customer'
import customers from './customers'

const rootReducer = combineReducers( { cart, customer, customers, routing: routerReducer } )

export default rootReducer
