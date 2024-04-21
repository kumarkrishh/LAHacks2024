import mongoose from "mongoose";

const chatgptSchema = mongoose.Schema({
    query: String,
    response: String,
});