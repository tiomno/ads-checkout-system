const cart = ( state = [], action ) => {
    switch ( action.type )
    {
        case 'ADD_PRODUCT':
            return state.map( product => {
                if ( product._id !== action._id )
                {
                    return product
                }

                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            } )

        case 'REMOVE_PRODUCT':
            return state.map( product => {
                if ( product._id !== action._id )
                {
                    return product
                }

                return {
                    ...product,
                    quantity: product.quantity === 0 ? 0 : product.quantity - 1
                }
            } )

        case 'EMPTY_CART':
            return state.map( product => {
                return {
                    ...product,
                    quantity: 0
                }
            } )

        case 'GET_PRODUCTS':
            return action.data.map( product => ( { ...product, quantity: 0 } ) )

        default:
            return state
    }
}

export default cart
