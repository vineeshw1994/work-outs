const mongoose = require('mongoose');
const productModel = require('../models/productmodel')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    isblocked: {
        type: Boolean,
        required: true,
        default: false
    }, cart: {
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: productModel
            },
            name: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1
            }, 
            realPrice: {
                type: Number,
            },
            price: {
                type: Number,
            },
            offer: {
                type: Number,
            }
        }]
    },
    grantTotal: {
        type: Number,
    },
    total: {
        type: Number,
    },



    wishlist: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: productModel
        }
    }],

    walletbalance:{
        type:Number,
        default:0
    },
    wallethistory: [
        {   
            process:{
                type: String // Payment or TopUp or Refund
            },  
            amount: {
                type:Number
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],

    address: [{
        name: {
            type: String,
            required: true
        },
        houseName: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        }
    }]
})


const usercollection = new mongoose.model("userdata", userSchema);

module.exports = usercollection;
