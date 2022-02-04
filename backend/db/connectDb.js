import mongoose from 'mongoose';

export default connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
      
  }
};
