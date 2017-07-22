const mongoose = require( 'mongoose' )

const discountSchema = new mongoose.Schema( {
    type: {
        type: String,
        required: 'Please set a discount type [deal or discount]',
    },
    deal: [Number],
    from: Number,
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: 'Please supply a product',
    },
    discount: Number,
} )

const customerSchema = new mongoose.Schema( {
    name: {
        type: String,
        trim: true,
        required: 'Please enter a customer name!',
    },
    discounts: [discountSchema],
} )

customerSchema.index( {
    name: 'text',
    description: 'text',
} )

module.exports = mongoose.model( 'Customer', customerSchema )
