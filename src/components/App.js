import { Route, Switch, Redirect } from 'react-router-dom'
import logo from '../css/images/logo.svg'
import menuFactory from './Menu'
import loginFormFactory from './LoginForm'
import notFoundFactory from './NotFound'
import productsFactory from './Products'
import checkoutFactory from './Checkout'
import rulesFactory from './Rules'

const appFactory = ( { React, PropTypes } ) => {

    const Menu = menuFactory( { React, PropTypes } )
    const LoginForm = loginFormFactory( { React, PropTypes } )
    const NotFound = notFoundFactory( { React } )
    const Products = productsFactory( { React, PropTypes } )
    const Checkout = checkoutFactory( { React, PropTypes } )
    const Rules = rulesFactory( { React, PropTypes } )

    // Creating a function type `App` allows React to identify the component
    // and show it accordingly in the React Developer Tools
    const App = ( props ) => {

        return {
            props,

            getAppBody() {
                const { isLoggedIn } = this.props.customer

                if ( ! isLoggedIn )
                {
                    return <LoginForm { ...this.props } />
                }

                return (
                    <Switch>
                        <Route exact path="/products" render={ () => <Products { ...this.props } /> } />
                        <Route exact path="/checkout" render={ () => <Checkout { ...this.props } /> } />
                        <Route exact path="/rules" render={ () => <Rules { ...this.props } /> } />
                        {/*
                          If the property `exact` is omitted in the Redirect component,
                          the NotFound component will never be routed.
                          This may be a desirable behaviour in certain cases.
                        */}
                        <Redirect exact from="/" to="/products" />
                        <Route component={ NotFound } />
                    </Switch>
                )
            },

            render() {
                return (
                    <div className="App">
                        <div className="App-header">
                            <img src={ logo } className="App-logo" alt="logo" />
                            <h2>Ads Checkout System</h2>
                        </div>
                        <Menu { ...this.props } />

                        { this.getAppBody.bind( this )() }
                    </div>
                )
            }
        }
    }

    // The type `App` also helps to declare propTypes as a static property which is a React requirement
    App.propTypes = {
        customer: PropTypes.object.isRequired,
    }

    return App
}

export default appFactory
