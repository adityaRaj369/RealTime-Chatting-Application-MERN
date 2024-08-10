import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import axios from "axios";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Self-pinging route to keep the server warm
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Function to periodically ping the server
const pingSelf = () => {
  axios.get(`https://realtime-chatting-application-mern.onrender.com/`)
    .then(() => console.log('Pinged self successfully!'))
    .catch((err) => console.error('Error pinging self:', err));
};

// Ping the server every 5 minutes
setInterval(pingSelf, 5 * 60 * 1000);

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
	pingSelf(); // Initial ping to warm up the server on start
});
