import express from "express";
import { User } from '../models/User.js';
import { Address } from '../models/Address.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const { name, addressLine1, city, state, zipCode } = req.body;

        const newUser = new User({ name });
        const savedUser = await newUser.save();

        const newAddress = new Address({
            userId: savedUser._id,
            addressLine1,
            city,
            state,
            zipCode
        });
        await newAddress.save();

        res.status(200).json({ message: 'User and address saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }
});

export default router;