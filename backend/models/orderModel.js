const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    or_id:{
        type: Number,
        required: true,
    },

    or_pd_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },

    or_us_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    or_amount:{
        type: Number,
        required: true,
    },

    or_created_at:{
        type: Date,
        default: Date.now
    },

    or_updated_at:{
        type: Date,
        default: Date.now
    }
})

orderSchema.pre('save', function(next){
    this.or_updated_at = Date.now();
    next()
})

module.exports = mongoose.model('Order', orderSchema);