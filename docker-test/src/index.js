import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import { dbConnect } from "../src/config/database.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();
dotenv.config()
const port = 4000;

app.use(express.json());
app.use(cors(
  {
    origin:"http://localhost:5173"
  }
))
dbConnect()
  .then(() => {
    
    console.log("Database connected successfully");

   app.use("/api", userRoutes);

    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error.message);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
    
  });
});



