const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    ct_id:{
        type: Number,
        required: true,
    },

    ct_code:{
        type: String,
        required: true,
    },

    ct_name:{
        type: String,
        required: true,
    },

    ct_created_at:{
        type: Date,
        default: Date.now
    },

    ct_updated_at:{
        type: Date,
        default: Date.now
    }
})

categorySchema.pre('save', function(next){
    this.ct_updated_at = Date.now();
    next()
})

module.exports = mongoose.model('Category', categorySchema);