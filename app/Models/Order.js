'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    static boot(){
        super.boot()

        this.addHook('afterFind', 'OrderHook.updateValues')
        this.addHook('afterPaginate', 'OrderHook.updateCollectionValues')

    }

    items(){
        return this.hasMany('App/Models/OrdemItem')//Porque hasMany?  Porque 1 item de pedido, so pode pertencer a uma unica "Order", porém uma "Order" pode ter mais que um pedido!
    }

    coupon(){
        return this.belongsToMany('App/Models/Coupon')
    }

    discounts(){
        return this.hasMany('App/Models/Discount')
    }

    user(){
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }

}

module.exports = Order
