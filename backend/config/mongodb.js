const mongoose = require('mongoose');
async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Mongodb connect');
  } catch (error) {
    console.log(error);
  }
}
export default connectDb;
