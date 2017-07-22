const productFactory = ( { React, PropTypes } ) => {

    const Product = ( props ) => {

        return {
            props,

            render() {
                const { name, description, price, quantity, _id } = this.props.product

                return (
                    <div className="col-md-4 col-sm-6 col-xs-12 product">
                        <div className="product-content">
                            <div className="product-head">
                                <div className="product-title">
                                    { name }
                                </div>
                                <div className="product-description">
                                    { description }
                                </div>
                            </div>

                            <div className="product-price">
                                $ { price }
                            </div>
                            <button className="btn-std btn-qty" onClick={ () => { this.props.removeProduct( _id ) } }>-</button>
                            <span className="qty">{ quantity }</span>
                            <button className="btn-std btn-qty" onClick={ () => { this.props.addProduct( _id ) } }>+</button>
                        </div>
                    </div>
                )
            }
        }
    }

    Product.propTypes = {
        product: PropTypes.object.isRequired,
        addProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
    }

    return Product
}

export default productFactory
