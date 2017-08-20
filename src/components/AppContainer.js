import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'
import appFactory from './App'

const appContainerFactory = ( { React, PropTypes } ) => {

    const App = appFactory( { React, PropTypes } )

    const mapStateToProps = ( state ) => {
        return {
            cart: state.cart,
            customer: state.customer,
            customers: state.customers,
        }
    }

    const mapDispachToProps = ( dispatch ) => {
        /**
         * Initialising the state of the store.
         * This is not the right way to do this in production!!!
         * A better way is to use redux-thunk middleware for Redux,
         * which allows to controls when to dispatch an action to request the external data
         */
        actionCreators.getCustomers( dispatch )
        actionCreators.getProducts( dispatch )

        return bindActionCreators( actionCreators, dispatch )
    }

    return connect( mapStateToProps, mapDispachToProps )( App )
}

export default appContainerFactory
