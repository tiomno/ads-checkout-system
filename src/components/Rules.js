import Select from 'react-select'

const rulesFactory = ( { React, PropTypes } ) => {

    const Rules = ( props ) => {

        const _customerByName = customerName => customer => {
            return customer.name.toLowerCase() === customerName
        }

        const _productById = productId => product => {
            return product._id === productId
        }

        const _rulesFromDiscount = cart => discount => {
            return {
                key: discount.product,
                product: cart.find( _productById( discount.product ) ).name,
                type: discount.type,
                discount: discount.discount || 0,
                deal: discount.deal || [1, 1],
                from: discount.from || 1,
            }
        }

        return {
            props,

            handlerChangeProduct( selectedProduct ) {
                this.props.setProductRule( selectedProduct.value )
            },

            handlerChangeDiscountType( selectedDiscountType ) {
                this.props.setDiscountTypeRule( selectedDiscountType.value )
            },

            handleGetChange( e ) {
                this.props.setGetRule( e.target.value )
            },

            handleForChange( e ) {
                this.props.setForRule( e.target.value )
            },

            handleDiscountChange( e ) {
                this.props.setDiscountRule( e.target.value )
            },

            handleFromChange( e ) {
                this.props.setFromRule( e.target.value )
            },

            handleSubmit( e ) {
                e.preventDefault()

                const { customers, customer, editingRule } = this.props
                const { productId, discountType, deal, from, discount } = editingRule

                const customerId = customers.find( _customerByName( customer.name ) )._id

                this.props.updateRule( customerId, productId, discountType, deal, from, discount )
            },

            render() {

                const { cart, customers, customer, editingRule } = this.props
                const { productId, discountType, deal, from, discount } = editingRule

                const productOptions = cart.map( product => {
                    return {
                        value: product._id,
                        label: product.name,
                    }
                } )

                const discountOptions = [
                    { value: 'no-deal', label: 'No deal or discount', },
                    { value: 'deal', label: 'Gets an [n] for [m] deal', },
                    { value: 'discount', label: 'Price drops to [n] when [m] or more are purchased', },
                ]

                const rules = customers.find( _customerByName( customer.name ) ).discounts.map( _rulesFromDiscount( cart ) )

                return (
                    <div className="App-page">
                        <h1 className="title">Pricing Rules</h1>
                        <div className="container">
                            <div className="col-sm-6 col-xs-12">
                                <div className="rule-form">
                                    <h3>Edit Pricing Rule</h3>
                                    <form onSubmit={ this.handleSubmit.bind( this ) }>
                                        <Select
                                            name="product"
                                            placeholder="Select a product..."
                                            value={ productId }
                                            options={ productOptions }
                                            clearable={ false }
                                            onChange={ this.handlerChangeProduct.bind( this ) }
                                        />
                                        <Select
                                            name="discount"
                                            placeholder="Select a discount type..."
                                            value={ discountType }
                                            options={ discountOptions }
                                            clearable={ false }
                                            onChange={ this.handlerChangeDiscountType.bind( this ) }
                                        />

                                        <div className="rule-discount-type">
                                            <p className={ discountType === 'deal' ? '' : 'hidden' }>Gets an <input type="text" value={ deal[0] } onChange={ this.handleGetChange.bind( this ) } /> for <input type="text" value={ deal[1] } onChange={ this.handleForChange.bind( this ) } /> deal</p>
                                            <p className={ discountType === 'discount' ? '' : 'hidden' }>Price drops to <input type="text" value={ discount } onChange={ this.handleDiscountChange.bind( this ) } /> when <input type="text" value={ from } onChange={ this.handleFromChange.bind( this ) } /> or more are purchased</p>
                                        </div>

                                        <button className="btn-std" type="submit">Apply</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="rule-current">
                                    <h3>Current Pricing Rules</h3>
                                    <ul>
                                        { rules.map( rule => (
                                            <li className="rule-discount" key={ rule.key }>
                                                <div className="rule-discount-product">{ rule.product }</div>
                                                { rule.type === 'deal' ? (
                                                    <p className="rule-discount-discount">Gets a <strong>{ rule.deal[0] }</strong> for <strong>{  rule.deal[1] }</strong> deal</p>
                                                ) : (
                                                    <p className="rule-discount-discount">The price drops to <strong>$ { rule.discount }</strong> when <strong>{ rule.from }</strong> or more are purchased</p>
                                                ) }

                                            </li>
                                        ) ) }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }

    Rules.propTypes = {
        customer: PropTypes.object.isRequired,
        customers: PropTypes.array.isRequired,
        cart: PropTypes.array.isRequired,
        editingRule: PropTypes.object.isRequired,
        updateRule: PropTypes.func.isRequired,
        setProductRule: PropTypes.func.isRequired,
        setDiscountTypeRule: PropTypes.func.isRequired,
        setGetRule: PropTypes.func.isRequired,
        setForRule: PropTypes.func.isRequired,
        setDiscountRule: PropTypes.func.isRequired,
        setFromRule: PropTypes.func.isRequired,
    }

    return Rules
}

export default rulesFactory
