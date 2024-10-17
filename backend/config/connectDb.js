const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected');
    } catch (e) {
        console.error('Error db connect: ', e);
        process.exit(1);
    }
}

module.exports = connectDb;