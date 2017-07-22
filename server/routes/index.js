const express = require( 'express' )
const router = express.Router()
const customerController = require( '../controllers/customerController' )
const productController = require( '../controllers/productController' )
const { catchErrors } = require( '../handlers/errorHandlers' )

router.get( '/api/customers', catchErrors( customerController.getCustomers ) )
router.get( '/api/products', catchErrors( productController.getProducts ) )

module.exports = router
