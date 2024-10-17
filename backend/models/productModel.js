const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pd_id:{
        type: Number,
        required: true,
    },

    pd_code:{
        type: String,
        required: true,
    },

    pd_ct_id:{
        type: Number,
        required: true,
    },

    pd_name:{
        type: String,
        required: true,
    },

    pd_price:{
        type: Number,
        required: true,
    },

    pd_created_at:{
        type: Date,
        default: Date.now
    },

    pd_updated_at:{
        type: Date,
        default: Date.now
    }
})

productSchema.pre('save', function(next){
    this.pd_updated_at = Date.now();
    next()
})

module.exports = mongoose.model('Product', productSchema);