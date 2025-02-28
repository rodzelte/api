import express from "express";

import taskRoutes from "./routes/taskRoutes";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";
import cors from "cors";

// TRY DEVELOPING THE REGISTER AND LOGIN FUNCTIONALITY

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
//cors
app.use(cors());

// TRY TO REGISTER AND LOGIN
app.use("/auth",   authRoutes);

// Task Routes
app.use("/task", taskRoutes);

// User Routes

app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
