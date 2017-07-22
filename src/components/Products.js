import { Link } from 'react-router-dom'
import productFactory from './Product'

const productsFactory = ( { React, PropTypes } ) => {

    const Product = productFactory( { React, PropTypes } )

    const Products = ( props ) => {

        return {
            props,

            render() {
                return (
                    <div className="App-page">
                        <h1 className="title">Showcase</h1>
                        <div className="container">
                            { this.props.cart.map( ( product ) => (
                                <Product key={ product._id } product={ product } { ...this.props } />
                            ) ) }
                        </div>
                        <div className="row">
                            <Link className="btn-std" to="/checkout">Checkout</Link>
                        </div>
                    </div>
                )
            }
        }
    }

    Products.propTypes = {
        cart: PropTypes.array.isRequired,
    }

    return Products
}

export default productsFactory
