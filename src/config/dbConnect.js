import mongoose from "mongoose"

mongoose.connect("mongodb+srv://arthurmongo:arthur1234@cluster0.kiutj.mongodb.net/arthurlivros");

let db = mongoose.connection;

export default db;