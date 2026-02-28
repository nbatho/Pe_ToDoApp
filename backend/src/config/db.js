import mongoose from "mongoose";
export const connectDB = async () => {
    console.log("data", process.env.USERNAME_DB, process.env.PASSWORD_DB);
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@pecluster.tk7cih7.mongodb.net/?appName=PeCluster`
        );
        console.log("Connected to the database successfully!");
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}