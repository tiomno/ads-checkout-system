const customers = ( state = [], action ) => {
    switch ( action.type )
    {
        case 'GET_CUSTOMERS':
            return action.data

        case 'UPDATE_RULE':
            return state.map( customer => {
                if ( customer._id !== action.customerId )
                {
                    return customer
                }

                const discountIdx = customer.discounts.findIndex( discount => {
                    return discount.product === action.productId
                } )

                if ( discountIdx === -1 )
                {
                    if ( action.discountType === 'no-deal' )
                    {
                        // There is no deal or discount for a product that has no discounts set
                        return customer
                    }
                    else
                    {
                        // There is a deal for a product that has no discounts, so add it
                        return {
                            ...customer,
                            discounts: [
                                ...customer.discounts.slice( 0, discountIdx ),
                                {
                                    product: action.productId,
                                    type: action.discountType,
                                    deal: action.deal,
                                    from: action.from,
                                    discount: action.discount,
                                },
                                ...customer.discounts.slice( discountIdx )
                            ]
                        }
                    }
                }
                else
                {
                    if ( action.discountType === 'no-deal' )
                    {
                        // There is no deal or discount for the product, so remove it from discounts
                        return {
                            ...customer,
                            discounts: [
                                ...customer.discounts.slice( 0, discountIdx ),
                                ...customer.discounts.slice( discountIdx + 1 ),
                            ]
                        }
                    }
                    else
                    {
                        return {
                            ...customer,
                            discounts: customer.discounts.map( discount => {
                                if ( discount.product !== action.productId )
                                {
                                    return discount
                                }

                                return {
                                    ...discount,
                                    type: action.discountType,
                                    deal: action.deal,
                                    from: action.from,
                                    discount: action.discount,
                                }
                            } )
                        }
                    }
                }
            } )

        default:
            return state
    }
}

export default customers
