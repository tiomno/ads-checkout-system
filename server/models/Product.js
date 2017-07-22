const mongoose = require( 'mongoose' )

const productSchema = new mongoose.Schema( {
    name: {
        type: String,
        trim: true,
        required: 'Please enter a product name!',
    },
    description: String,
    price: Number,
} )

productSchema.index( {
    name: 'text',
    description: 'text',
} )

module.exports = mongoose.model( 'Product', productSchema )
