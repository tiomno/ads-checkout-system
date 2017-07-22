import { Link } from 'react-router-dom'

const menuFactory = ( { React, PropTypes } ) => {

    const Menu = ( props ) => {

        return {
            props,

            handleMenuClick( optName ) {
                if ( optName === 'Logout' )
                {
                    this.props.logoutCustomer()
                    this.props.emptyCart()
                }
            },

            render() {
                const { isLoggedIn } = this.props.customer

                const options = isLoggedIn ? [
                    { key: 'p', name: 'Products', ref: '/products', },
                    { key: 'c', name: 'Checkout', ref: '/checkout', },
                    { key: 'r', name: 'Pricing Rules', ref: '/rules', },
                    { key: 'l', name: 'Logout', ref: '/', },
                ] : [
                    { key: 'l', name: 'Login', ref: '/', },
                ]

                return (
                    <div className="App-menu">
                        <ul>
                            { isLoggedIn && <li className="customer">Customer - { this.props.customer.name }</li> }
                            { options.map( ( opt ) => {
                                return (
                                    <li key={ opt.key }>
                                        <Link to={ opt.ref } onClick={ this.handleMenuClick.bind( this, opt.name ) }>{ opt.name }</Link>
                                    </li>
                                )
                            } ) }
                        </ul>
                    </div>
                )
            }
        }
    }

    Menu.propTypes = {
        customer: PropTypes.object.isRequired,
        logoutCustomer: PropTypes.func.isRequired,
        emptyCart: PropTypes.func.isRequired,
    }

    return Menu
}

export default menuFactory
