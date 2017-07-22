const customer = ( state = null, action ) => {
    switch ( action.type )
    {
        case 'SET_CUSTOMER':
            return {
                name: action.customerName,
                isLoggedIn: false,
            }

        case 'LOGIN_CUSTOMER':
            return {
                ...state,
                isLoggedIn: true,
            }

        case 'LOGOUT_CUSTOMER':
            return {
                name: '',
                isLoggedIn: false,
            }

        default:
            return state
    }
}

export default customer
