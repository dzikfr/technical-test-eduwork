const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    ad_username:{
        type: String,
        required: true,
    },

    ad_password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Admin', adminSchema);