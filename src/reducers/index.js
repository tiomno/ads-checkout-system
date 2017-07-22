import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cart from './cart'
import customer from './customer'
import customers from './customers'
import rules from './rules'

const rootReducer = combineReducers( { cart, customer, customers, editingRule: rules, routing: routerReducer } )

export default rootReducer
