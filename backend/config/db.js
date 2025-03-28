import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://swiftbite:302323@cluster0.txnfp.mongodb.net/FOOD-DEL", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};