const customer = ( state = null, action ) => {
    switch ( action.type )
    {
        case 'LOGIN_CUSTOMER':
            return {
                name: action.customerName,
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
