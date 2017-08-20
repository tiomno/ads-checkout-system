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
}

const store = createStore( rootReducer, defaultState )
const history = syncHistoryWithStore( createBrowserHistory(), store )

export { history }
export default store
