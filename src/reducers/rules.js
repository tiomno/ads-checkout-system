const rules = ( state = [], action ) => {
    switch ( action.type )
    {
        case 'SET_PRODUCT_RULE':
            return {
                ...state,
                productId: action.productId,
            }

        case 'SET_DISCOUNT_TYPE_RULE':
            return {
                ...state,
                discountType: action.discountType,
            }

        case 'SET_GET_DEAL_RULE':
            return {
                ...state,
                deal: [ action.getValue, state.deal[1] ],
            }

        case 'SET_FOR_DEAL_RULE':
            return {
                ...state,
                deal: [ state.deal[0], action.forValue ],
            }

        case 'SET_DISCOUNT_RULE':
            return {
                ...state,
                discount: action.discount,
            }

        case 'SET_FROM_RULE':
            return {
                ...state,
                from: action.from,
            }

        default:
            return state
    }
}

export default rules
