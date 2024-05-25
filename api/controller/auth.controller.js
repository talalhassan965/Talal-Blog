import User from '../models/user.modle.js'
import bcrytpjs from 'bcryptjs'
import { errorHandler } from '../util/error.js';



export const signup = async (req, res, next) =>{
    const {username, email, password} = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'))
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
        next(error);
    }

}