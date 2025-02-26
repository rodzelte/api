import express from "express";

import taskRoutes from "./routes/taskRoutes"
import authRoutes from "./routes/authRoutes"
import dotenv from "dotenv"


// TRY DEVELOPING THE REGISTER AND LOGIN FUNCTIONALITY

const app = express();
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT || 3000;

// TRY TO REGISTER AND LOGIN 
app.use("/auth", authRoutes);



// Task Routes
app.use("/", taskRoutes);

// User Routes


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
