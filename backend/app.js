const express = require('express');
const {config} = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/connectDb');
const userRoutes = require('./routes/userRoute');

const app = express();

app.use(cors());
app.use(express.json());

config();

connectDb();

app.use('/api', userRoutes);

app.listen(process.env.PORT, () => console.log(`Server berjalan pada port ${process.env.PORT}`));