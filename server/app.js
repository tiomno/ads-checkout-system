const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const routes = require( './routes/index' )
const errorHandlers = require( './handlers/errorHandlers' )

const app = express()

app.use( bodyParser.json() )

// middleware to allow CORS
app.use( ( req, res, next ) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' )
    res.setHeader( 'Access-Control-Allow-Credentials', true )

    next()
} )

app.use( '/', routes )

// 404 error handler
app.use( errorHandlers.notFound )

// Unexpected errors handler
if ( app.get( 'env' ) === 'development' )
{
    app.use( errorHandlers.developmentErrors )
}

// production error handler
app.use( errorHandlers.productionErrors )

module.exports = app
