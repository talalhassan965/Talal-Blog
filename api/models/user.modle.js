import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default:'https://th.bing.com/th/id/R.c98530977183534ed0e49e6db725bd7d?rik=2qJXoi1QKl%2b7Iw&pid=ImgRaw&r=0'
    }

}, {timestamps: true}
);
const User = mongoose.model('User', userSchema) 
export default User;