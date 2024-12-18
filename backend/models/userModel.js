const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    us_id:{
        type: Number,
        unique: true,
    },

    us_name:{
        type: String,
        required: true,
    },

    us_password:{
        type: String,
        required: true,
    },

    us_email:{
        type: String,
        required: true,
    },

    us_phone_number:{
        type: String,
        required: true,
    },

    us_address:{
        type: String,
        required: true,
    },

    us_created_at:{
        type: Date,
        default: Date.now
    },

    us_updated_at:{
        type: Date,
        default: Date.now
    }
})

userSchema.plugin(AutoIncrement, {inc_field: 'us_id'});

userSchema.pre('save', function(next){
    this.us_updated_at = Date.now();
    next()
})

module.exports = mongoose.model('User', userSchema);