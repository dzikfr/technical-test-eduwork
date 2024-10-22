const Admin = require('../models/adminModel.js');

const login = async (req,res) => {
    try {
        const { ad_username, ad_password } = req.body;

        const admin = await Admin.findOne({ ad_username, ad_password });

        if (!admin) {
            return res.status(404).json({ message: 'Username tidak ditemukan' });
        }

        if (admin.ad_password !== ad_password) {
            return res.status(401).json({ message: 'Password salah' });
        }

        res.status(200).json({ message: 'Login successfull', admin });
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
}

const register = async (req, res) => {
    try {
        const { ad_username, ad_password } = req.body;

        const existingAdmin = await Admin.findOne({ where: { ad_username } });

        if (existingAdmin) {
            return res.status(400).json({ message: 'Username sudah digunakan' });
        }

        const newAdmin = await Admin.create({ ad_username, ad_password });

        res.status(201).json({ message: 'Register successfull', newAdmin });
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
}

module.exports = {
    login, 
    register
}