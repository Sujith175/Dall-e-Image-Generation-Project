import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./MongoDB/connect.js";
import postRoutes from "./Routes/postRoutes.js";
import dalleRoutes from "./Routes/dalleRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// middleware to use routes

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("hello World");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server has started at 8080"));
  } catch (error) {
    console.log(error);
  }
};
startServer();
