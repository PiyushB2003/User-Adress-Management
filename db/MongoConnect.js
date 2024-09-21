import mongoose from "mongoose";

const MongoConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/backend-assignment');
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default MongoConnect;