import mongoose from "mongoose";

export const connectToDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "wrapme",
    });
  } catch (error) {}
};
