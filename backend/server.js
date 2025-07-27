import express, { json } from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import noteRoutes from "./routes/Notes.js";
import auth from "./middleware/auth.js";
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(json());
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use('/api/auth', auth);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
