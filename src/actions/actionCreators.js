import axios from 'axios'

/**
 * Sets the active customer in the store.
 *
 * @param {String} customerName The customer name.
 *
 * @returns {{type: string, customerName: string}}
 */
export function setCustomer( customerName )
{
    return {
        type: 'SET_CUSTOMER',
        customerName,
    }
}

/**
 * Logs in the customer.
 *
 * @returns {{type: string}}
 */
export function loginCustomer()
{
    return {
        type: 'LOGIN_CUSTOMER'
    }
}

/**
 * Logs out the customer
 *
 * @returns {{type: string}}
 */
export function logoutCustomer()
{
    return {
        type: 'LOGOUT_CUSTOMER'
    }
}

/**
 * Adds a product to the cart.
 *
 * @param {String} _id The ID of the product.
 *
 * @returns {{type: string, _id: string}}
 */
export function addProduct( _id )
{
    return {
        type: 'ADD_PRODUCT',
        _id,
    }
}

/**
 * Removes a product from the cart
 *
 * @param {String} _id The ID of the product.
 *
 * @returns {{type: string, _id: string}}
 */
export function removeProduct( _id )
{
    return {
        type: 'REMOVE_PRODUCT',
        _id,
    }
}

/**
 * Empties the cart
 *
 * @returns {{type: string}}
 */
export function emptyCart()
{
    return {
        type: 'EMPTY_CART',
    }
}

/**
 * Sets the product for the editing rule.
 *
 * @param {String} productId The ID of the product.
 *
 * @returns {{type: string, product: string}}
 */
export function setProductRule( productId )
{
    return {
        type: 'SET_PRODUCT_RULE',
        productId,
    }
}

/**
 * Sets the discount type for the editing rule.
 *
 * @param {String} discountType The type of the discount <'deal | 'discount'>.
 *
 * @returns {{type: string, discountType: string}}
 */
export function setDiscountTypeRule( discountType )
{
    return {
        type: 'SET_DISCOUNT_TYPE_RULE',
        discountType,
    }
}

/**
 * Sets the `get` value for the editing rule.
 *
 * @param {String} getValue The `get` value of a deal.
 *
 * @returns {{type: string, getValue: number}}
 */
export function setGetRule( getValue )
{
    return {
        type: 'SET_GET_DEAL_RULE',
        getValue,
    }
}

/**
 * Sets the `for` value for the editing rule.
 *
 * @param {String} forValue The `for` value of a deal.
 *
 * @returns {{type: string, forValue: number}}
 */
export function setForRule( forValue )
{
    return {
        type: 'SET_FOR_DEAL_RULE',
        forValue,
    }
}

/**
 * Sets the discount price for the editing rule.
 *
 * @param {String} discount The discount price.
 *
 * @returns {{type: string, discount: number}}
 */
export function setDiscountRule( discount )
{
    return {
        type: 'SET_DISCOUNT_RULE',
        discount,
    }
}

/**
 * Sets the `from` value for the editing rule.
 *
 * @param {String} from The `from` value of a discount.
 *
 * @returns {{type: string, from: number}}
 */
export function setFromRule( from )
{
    return {
        type: 'SET_FROM_RULE',
        from,
    }
}

/**
 * Updates a pricing rule for a product
 *
 * @param {String} customerId The ID of the customer,
 * @param {String} productId The ID of the product,
 * @param {String} discountType <'deal' | 'discount' | 'no-deal'> The type of the discount,
 * @param {Array|Number} deal Two array values `[x,y]` so that `Gets a x for y deal`
 *     or a number `z` so that `Gets a discount when z or more are purchased`,
 * @param {Number} from The number of products to buy before applying the discount,
 * @param {Number} discount The discounted price of the product.
 *
 * @returns {{type: string, productId: string, discountType: string, deal: [number,number], from: number, discount: number}}
 */
export function updateRule( customerId, productId , discountType, deal, from, discount )
{
    return {
        type: 'UPDATE_RULE',
        customerId,
        productId,
        discountType,
        deal,
        from,
        discount,
    }
}

/**
 * Async Actions to initialise the Store state
 */
export function getCustomers( dispatch )
{
    axios.get( 'http://localhost:5000/api/customers' )
        .then( response =>  dispatch( {
            type: 'GET_CUSTOMERS',
            data: response.data,
        } ) )
        .catch( ( err ) => {
            console.log( `Error fetching the customers: ${ err }` )
        } )
}

export function getProducts( dispatch )
{
    axios.get( 'http://localhost:5000/api/products' )
        .then( response =>  dispatch( {
            type: 'GET_PRODUCTS',
            data: response.data,
        } ) )
        .catch( ( err ) => {
            console.log( `Error fetching the products: ${ err }` )
        } )
}
