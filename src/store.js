import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index'

const defaultState = {
    cart: [],
    customers: [],
    customer: {
        name: '',
        isLoggedIn: false,
    },
    editingRule: {
        productId: '',
        discountType: '',
        deal: [ 1, 1 ],
        from: 1,
        discount: 0,
    }
}

const store = createStore( rootReducer, defaultState )
const history = syncHistoryWithStore( createBrowserHistory(), store )

export { history }
export default store
