const express = require('express');
const {config} = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/connectDb');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');
const categoryRoutes = require('./routes/categoryRoute');
const authRoutes = require('./routes/authRoute');
const userAuthRoutes = require('./routes/userAuthRoute');
const cloudinaryConfig = require('./config/cloudinary');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(express.json());

config();

connectDb();
cloudinaryConfig();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', categoryRoutes);
app.use('/auth/admin', authRoutes);
app.use('/auth', userAuthRoutes);

app.listen(process.env.PORT, () => console.log(`Server berjalan pada port ${process.env.PORT}`));