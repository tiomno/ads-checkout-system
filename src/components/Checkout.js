import { Link } from 'react-router-dom'

const checkoutFactory = ( { React, PropTypes } ) => {

    const Checkout = ( props ) => {

        return {
            props,

            getTotal( product ) {
                return product.quantity * product.price
            },

            getDiscount( product ) {
                // get discounts for the current customer
                const customer = this.props.customers.find( customer => {
                    return customer.name.toLowerCase() === this.props.customer.name
                } )

                if ( ! customer )
                {
                    return 0
                }

                // go through the discounts and process those linked to the product
                return customer.discounts.reduce( ( discountAmount, discount ) => {

                    if ( product._id !== discount.product )
                    {
                        return discountAmount
                    }

                    let productDiscount = 0

                    switch ( discount.type )
                    {
                        case 'deal':
                            const [ _get, _deal ] = discount.deal

                            productDiscount = Math.trunc( product.quantity / _get ) * ( _get - _deal ) * product.price
                            break

                        case 'discount':
                            if ( product.quantity && product.quantity >= discount.from )
                            {
                                productDiscount = ( product.price - discount.discount ) * product.quantity
                            }
                            break

                        default:
                            break
                    }

                    return discountAmount + productDiscount

                }, 0 )
            },

            getAmount( product ) {
                return this.getTotal( product ) - this.getDiscount( product )
            },

            render() {
                const cartColumns = [
                    {
                        key: 'name',
                        caption: 'Product',
                        className: 'col-md-3 col-sm-3 col-xs-6',
                    },
                    {
                        key: 'quantity',
                        caption: 'Quantity',
                        className: 'col-md-2 col-sm-2 col-xs-6',
                    },
                    {
                        key: 'price',
                        caption: 'Unite Price',
                        className: 'col-md-2 col-sm-2 col-xs-6',
                    },
                    {
                        key: null,
                        caption: 'Total',
                        className: 'col-md-1 col-sm-1 col-xs-6',
                        transform: this.getTotal.bind( this ),
                    },
                    {
                        key: null,
                        caption: 'Discount',
                        className: 'col-md-2 col-sm-2 col-xs-6',
                        transform: this.getDiscount.bind( this ),
                    },
                    {
                        key: null,
                        caption: 'Amount',
                        className: 'col-md-2 col-sm-2 col-xs-6',
                        transform: this.getAmount.bind( this ),
                    },
                ]

                let total = 0
                let discounts = 0
                let amount = 0

                return (
                    <div className="App-page">
                        <h1 className="title">Checkout</h1>
                        <div className="container">
                            <div className="cart-block row">
                                <ul className="cart-header clearfix">
                                    { cartColumns.map( col => (
                                        <li key={ col.caption } className={ col.className }>{ col.caption }</li>
                                    ) ) }
                                </ul>
                                { this.props.cart.map( product => (
                                    <ul key={ product._id } className="cart-row">
                                        { cartColumns.map( ( col ) => {
                                            let _value

                                            if ( col.key )
                                            {
                                                _value = product[col.key]
                                            }
                                            else
                                            {
                                                _value = col.transform( product )

                                                switch ( col.caption )
                                                {
                                                    case 'Total':
                                                        total += _value
                                                        break

                                                    case 'Discount':
                                                        discounts += _value
                                                        break

                                                    case 'Amount':
                                                        amount += _value
                                                        break

                                                    default:
                                                        break
                                                }
                                            }

                                            return <li key={ col.caption } className={ col.className }>{ _value }</li>
                                        } ) }
                                    </ul>
                                ) ) }
                            </div>
                            <div className="cart-total row">
                                <ul className="col-md-3 col-md-offset-9 col-sm-12 pull-right">
                                    <li>Total <span>$ { total }</span></li>
                                    <li>Discounts <span>$ { discounts }</span></li>
                                    <li className="cart-total-amount">Total Amount <span>$ { amount }</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <Link className="btn-std" to="/checkout">Checkout</Link>
                        </div>
                    </div>
                )
            }
        }
    }

    Checkout.propTypes = {
        cart: PropTypes.array.isRequired,
    }

    return Checkout
}

export default checkoutFactory
