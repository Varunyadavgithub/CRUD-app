import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";

const app = express();
dotenv.config();

// db connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.log(`Error while connecting to the database ${error}`);
  });

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from server.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

// routes (APIs)
app.use("/api/v1/user", userRoutes);
