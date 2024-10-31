const Order = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');
const fs = require('fs');
const path = require('path');

const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find().populate('or_pd_id').populate('or_us_id');
        return res.status(200).send({message: "get data orders", data: orders})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('or_pd_id').populate('or_us_id')
        if(!order){
            return res.status(400).send({message: "order not found"})
        }
        return res.status(200).send({message: "order get", data: order})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const createOrder = async (req, res) => {
    try {
        // Validasi field yang diperlukan
        const { or_pd_id, or_us_id, or_amount } = req.body;
        if (!or_pd_id || !or_us_id || !or_amount) {
            return res.status(400).send({ message: 'Required fields are missing' });
        }

        // Membuat order baru
        const newOrder = {
            or_id: Math.floor(Math.random() * 100),
            or_pd_id,
            or_us_id,
            or_amount
        };

        // Simpan order
        let order = await Order.create(newOrder);

        // Mengambil order yang baru saja dibuat dengan populate
        order = await Order.findById(order._id).populate('or_pd_id').populate('or_us_id');

        // Menulis order ke file JSON
        const filePath = path.join(__dirname, '../assets/data/orders.json');
        const orderData = { or_id: order._id, or_pd_id: order.or_pd_id, or_amount: order.or_amount };

        let ordersData = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            ordersData = JSON.parse(data);
        }
        ordersData.push(orderData);
        fs.writeFileSync(filePath, JSON.stringify(ordersData, null, 2), 'utf8');

        // Mengirim respons berhasil
        return res.status(200).send({ message: "Order created", data: order });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).send({ message: error.message });
    }
};


const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: "Order deleted succesfully", data: deletedOrder})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

module.exports = {
    getAllOrder,
    getOrder,
    createOrder,
    deleteOrder
}