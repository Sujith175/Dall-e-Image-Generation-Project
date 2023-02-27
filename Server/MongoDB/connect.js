import mongoose from "mongoose";

const connectDb = (url) => {
  mongoose.set("strictQuery", true); //helps in search functionality
  mongoose
    .connect(url)
    .then(() => console.log("mongoDb Connected"))
    .catch((err) => console.log(err));
};

export default connectDb;
