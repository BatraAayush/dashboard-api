import "dotenv/config";
import express from "express";

import deviceDataRoutes from "./routes/deviceDataRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", deviceDataRoutes);

app.get("/", (req, res) => res.send("Dashboard's Backend"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
