import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;

// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const MONGO_URI= "mongodb+srv://vaishalivarshney159:B3JK9995e3YVxkP1@cluster0.krb2pis.mongodb.net/TwitterDB"

// const connectMongoDB = async () => {
//     try {
//         // console.log("MONGO_URI:", process.env.MONGO_URI); // Log the MongoDB URI for debugging
//         const conn = await mongoose.connect(MONGO_URI);
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error connecting to MongoDB: ${error.message}`);
//         process.exit(1);
//     }
// };

// export default connectMongoDB;


