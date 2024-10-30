const User = require('../models/userModel.js');
const fs = require('fs');
const path = require('path');

const createUser = async (req, res) =>{
    if(
        !req.body.us_id ||
        !req.body.us_name ||
        !req.body.us_password ||
        !req.body.us_email ||
        !req.body.us_phone_number ||
        !req.body.us_address
    ){
        return res.status(400).send({message: 'required field missing'})
    }

    const newUser = {
        us_id : req.body.us_id,
        us_name : req.body.us_name,
        us_password : req.body.us_password,
        us_email: req.body.us_email,
        us_phone_number: req.body.us_phone_number,
        us_address: req.body.us_address
    }

    const user = await User.create(newUser);

    //WRITEFILE
    const {us_id, us_name, us_password, us_email, us_phone_number, us_address} = req.body;
    const filePath = path.join(__dirname, '../assets/data/users.json');

    let usersData = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      usersData = JSON.parse(data);
    }
    usersData.push({ us_id, us_name, us_password, us_email, us_phone_number, us_address });
    fs.writeFileSync(filePath, JSON.stringify(usersData, null, 2), 'utf8');
    //END WRITEFILE 

    return res.status(200).send({message: "ok", data: user});
}

const getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        return res.status(200).send({message: "ok", data: user})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(400).send({message: "user not found"})
        }
        return res.status(200).send({message: "ok", data: user});
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const updateUser = async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        //UPDATE DATA ON ASSETS.JSON
        const filePath = path.join(__dirname, '../assets/data/users.json');
        let usersData = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            usersData = JSON.parse(data);
        }

        const userIndex = usersData.findIndex(user => user.us_id === updatedUser.us_id);

        if (userIndex !== -1) {
            usersData[userIndex] = {
                ...usersData[userIndex],
                ...req.body,
            };
        }

        fs.writeFileSync(filePath, JSON.stringify(usersData, null, 2), 'utf8');
        //END UPDATE DATA ON ASSETS.JSON

        return res.status(200).send({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        // DELETE DATA ON ASSETS.JSON
        const filePath = path.join(__dirname, '../assets/data/users.json');
        let usersData = [];
 
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            usersData = JSON.parse(data);
        }

        usersData = usersData.filter(user => user.us_id !== deletedUser.us_id);

        fs.writeFileSync(filePath, JSON.stringify(usersData, null, 2), 'utf8');
        //END DELETE DATA ON ASSETS.JSON


        return res.status(200).send({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ us_name: req.body.us_name, us_password: req.body.us_password });
        if (!user) {
            return res.status(404).send({ message: "User tidak ditemukan" });
        }
        return res.status(200).send({ message: "ok", data: user });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).send({ message: "ok", data: user });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    createUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    loginUser,
    registerUser
};