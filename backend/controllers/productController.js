const Product = require('../models/productModel.js');
const fs = require('fs');
const path = require('path');

const createProduct = async (req, res) =>{
    if(
        !req.body.pd_id ||
        !req.body.pd_code ||
        !req.body.pd_ct_id ||
        !req.body.pd_name ||
        !req.body.pd_price
    ){
        return res.status(400).send({message: 'required field missing'})
    }

    const newProduct = {
        pd_id : req.body.pd_id,
        pd_code : req.body.pd_code,
        pd_ct_id : req.body.pd_ct_id,
        pd_name: req.body.pd_name,
        pd_price: req.body.pd_price,
    }

    const products = await Product.create(newProduct);

    //WRITEFILE
    const {pd_id, pd_code, pd_ct_id, pd_name, pd_price} = req.body;
    const filePath = path.join(__dirname, '../assets/data/products.json');

    let productsData = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      productsData = JSON.parse(data);
    }
    productsData.push({ pd_id, pd_code, pd_ct_id, pd_name, pd_price });
    fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2), 'utf8');
    //END WRITEFILE 

    return res.status(200).send({message: "ok", data: products});
}

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).send({message: "get data products", data: products})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(400).send({message: "product not found"})
        }
        return res.status(200).send({message: "product get", data: product});
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const updateProduct = async(req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }

        //UPDATE DATA ON ASSETS.JSON
        const filePath = path.join(__dirname, '../assets/data/products.json');
        let productsData = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            productsData = JSON.parse(data);
        }

        const productIndex = productsData.findIndex(user => user.us_id === updatedProduct.us_id);

        if (productIndex !== -1) {
            productsData[productIndex] = {
                ...productsData[productIndex],
                ...req.body,
            };
        }

        fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2), 'utf8');
        //END UPDATE DATA ON ASSETS.JSON

        return res.status(200).send({ message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }

        // DELETE DATA ON ASSETS.JSON
        const filePath = path.join(__dirname, '../assets/data/products.json');
        let productsData = [];
 
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            productsData = JSON.parse(data);
        }

        productsData = productsData.filter(product => product.pd_id !== deletedProduct.pd_id);

        fs.writeFileSync(filePath, JSON.stringify(productsData, null, 2), 'utf8');
        //END DELETE DATA ON ASSETS.JSON


        return res.status(200).send({ message: "Product deleted successfully", data: deletedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
};