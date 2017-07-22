const mongoose = require( 'mongoose' )
const Customer = mongoose.model( 'Customer' )

exports.getCustomers = async ( req, res ) => {
    const customers = await Customer.find()

    res.json( customers )
}
