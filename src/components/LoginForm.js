import Select from 'react-select'

const loginFormFactory = ( { React, PropTypes } ) => {

    const LoginForm = ( props ) => {

        return {
            props,

            handlerChange( selectedCustomer ) {
                /* //TODO &&& make this component a stateful one an manipulate iinternally the state of the <Select component> */
                this.props.setCustomer( selectedCustomer.value )
            },

            handleSubmit( e ) {
                e.preventDefault()

                this.props.loginCustomer()
            },

            render() {
                const options = this.props.customers.map( customer => {
                    return {
                        value: customer.name.toLowerCase(),
                        label: customer.name,
                    }
                } )

                return (
                    <div className="App-login container">
                        <h1 className="title">Welcome to the ads checkout</h1>
                        <form onSubmit={ this.handleSubmit.bind( this ) }>
                            <Select
                                name="customers"
                                placeholder="Select a customer..."
                                value={ this.props.customer.name }
                                options={ options }
                                clearable={ false }
                                onChange={ this.handlerChange.bind( this ) }
                            />
                            <button className="form-btn" type="submit">Login</button>
                        </form>
                    </div>
                )
            }
        }
    }

    LoginForm.propTypes = {
        customer: PropTypes.object.isRequired,
        customers: PropTypes.array.isRequired,
        setCustomer: PropTypes.func.isRequired,
        loginCustomer: PropTypes.func.isRequired,
    }

    return LoginForm
}

export default loginFormFactory
