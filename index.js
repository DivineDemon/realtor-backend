import cors from "cors";
import * as dotenv from "dotenv";

import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { default as houseRouter } from "./routes/houseRoute.js";
import { default as agentRouter } from "./routes/agentRoute.js";

dotenv.config(); // Configure .env
const app = express(); // Initialize App
const PORT = process.env.PORT || 3000; // Initialize Port

// Middleware
app.use(cors());
app.use(errorHandler);
app.use(express.json({ limit: "200mb", extended: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

// Routes
app.use("/api/house", houseRouter);
app.use("/api/agent", agentRouter);

// Starting the Server
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server Active on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

startServer();
