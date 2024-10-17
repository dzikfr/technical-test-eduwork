const Category = require('../models/categoryModel.js');

const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).send({message: "get data category", data: category})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        if(!category){
            return res.status(400).send({message: "category not found"})
        }
        return res.status(200).send({message: "category get", data: category})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const createCategory = async (req, res) => {
    try {
        if(
            !req.body.ct_id ||
            !req.body.ct_code ||
            !req.body.ct_name
        ){
            return res.status(400).send({message: 'required field missing'})
        }

        const newCategory ={
            ct_id : req.body.ct_id,
            ct_code : req.body.ct_code,
            ct_name : req.body.ct_name
        }

        const category = await Category.create(newCategory);
        return res.status(200).send({message: "category created", data: category})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: "Category deleted succesfully", data: deletedCategory})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

module.exports = {
    getAllCategory,
    getCategory,
    createCategory,
    deleteCategory
}