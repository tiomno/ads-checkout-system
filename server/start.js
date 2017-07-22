const mongoose = require( 'mongoose' )
const clc = require( 'cli-color' )

require( 'dotenv' ).config( { path: 'variables.env' } )

mongoose.connect( process.env.DATABASE )
mongoose.Promise = global.Promise
mongoose.connection.on( 'error', ( err ) => {
    console.error( `MongoDB Connection Error → ${ err.message }` )
} )

require( './models/Customer' )
require( './models/Product' )

const app = require( './app' )
app.set( 'port', process.env.PORT || 5000 )
const server = app.listen( app.get( 'port' ), () => {
    console.log( `API Server running → PORT ${ server.address().port }` )

    if ( app.get( 'env' ) === 'development' )
    {
        console.log( clc.green( '===== ACTIONS =====' ) )
        console.log( `http://localhost:${ server.address().port }/api/customers`, clc.green( 'To get the list of customers' ) )
        console.log( `http://localhost:${ server.address().port }/api/products`, clc.green( 'To get the list of products' ) )
    }
} )
