const Order = require('../models/orderModel.js');

const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).send({message: "get data orders", data: orders})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
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
        if(
            !req.body.or_id ||
            !req.body.or_pd_id ||
            !req.body.or_amount
        ){
            return res.status(400).send({message: 'required field missing'})
        }

        const newOrder ={
            or_id : req.body.or_id,
            or_pd_id : req.body.or_pd_id,
            or_amount : req.body.or_amount
        }

        const order = await Order.create(newOrder);
    } catch (error) {
        return res.status(500).send({message: error.message})
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