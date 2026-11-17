
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Initialize Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define server port
const PORT = process.env.PORT || 5000;

// Test API route
app.get("/", (req, res) => {
    res.send("MERN Backend Server is Running");
});

// API health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend API is working successfully"
    });
});

// Connect database and start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
