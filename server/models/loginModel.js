import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    carbonFootprint: String,
});

const loginModel = mongoose.model('loginModel', loginSchema);

export default loginModel;