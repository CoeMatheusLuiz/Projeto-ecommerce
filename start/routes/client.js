'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    /* Products resource routes */

    Route.get('products', 'ProductController.index')
    Route.get('products/:id', 'ProductController.show')

    /* Order resource routes */

    Route.get('orders', 'OrderController.index')
    Route.get('orders/:id', 'OrderController.show')
    Route.get('orders', 'OrderController.store')
    Route.get('orders/:id', 'OrderController.put')

})    
    .prefix('v1')
    .namespace('Client')