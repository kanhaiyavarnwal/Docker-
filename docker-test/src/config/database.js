import mongoose from "mongoose";

const dbConnect = async () => {
  try {
   const instance =  await mongoose.connect(`${process.env.MONGODB_URL}`);

    console.log(`MongoDB connected successfully ${instance.connection}`);
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export { dbConnect};

