/**
 * Catch Errors Handler
 *
 * With async/await, there is needed some way to catch errors
 * Instead of using try{} catch(e) {} in each controller, the function is wrapped in catchErrors()
 * This function catches any errors they throw, and passes it along to express middleware with next()
 */
exports.catchErrors = ( fn ) => {
    return ( req, res, next ) => {
        fn( req, res, next ).catch( next )
    }
}

/**
 * Not Found Error Handler
 *
 * Mark any not matching route as 404 and pass it along to the next error handler to display
*/
exports.notFound = ( req, res, next ) => {
    const err = new Error( 'Not Found' )
    err.status = 404
    next( err )
}

/**
 * Development Error Handler
 *
 * Show detailed info on what happened
 */
exports.developmentErrors = ( err, req, res ) => {
    err.stack = err.stack || ''

    const errorDetails = {
        message: err.message,
        status: err.status,
        stackHighlighted: err.stack.replace( /[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>' ),
    }

    res.status( err.status || 500 )
    // Format based on the `Accept` http header
    res.format( {
        'text/html': () => res.render( 'error', errorDetails ),
        'application/json': () => res.json( errorDetails ),
    } )
}


/**
 * Production Error Handler
 *
 * No stack traces are leaked to user
 */
exports.productionErrors = ( err, req, res ) => {
    res.status( err.status || 500 )
    res.render( 'error', {
        message: err.message,
        error: {},
    } )
}
