import Select from 'react-select'

const loginFormFactory = ( { React, PropTypes } ) => {

    class LoginForm extends React.Component {

        static propTypes = {
            customer: PropTypes.object.isRequired,
            customers: PropTypes.array.isRequired,
            loginCustomer: PropTypes.func.isRequired,
        }

        constructor( props ) {
            super( props )

            this.state = {
                customerName: '',
            }
        }

        handlerChange( selectedCustomer ) {
            this.setState( {
                ...this.state,
                customerName: selectedCustomer.value,
            } )
        }

        handleSubmit( e ) {
            e.preventDefault()

            this.props.loginCustomer( this.state.customerName )
        }

        render() {
            const { customerName } = this.state

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
                            value={ customerName }
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

    return LoginForm
}

export default loginFormFactory
