import User from '../models/user.modle.js'
import bcrytpjs from 'bcryptjs'
export const signup = async (req, res) =>{
    const {username, email, password} = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({message: "All Feilds Are Required"})
    }

    const hashedPassword = bcrytpjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json("Signup Successfully")
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }

}