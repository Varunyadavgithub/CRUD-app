import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import { connectDB } from "./utils/connect_db.js";

const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from server.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

app.use("/api/v1/user", userRoutes);
