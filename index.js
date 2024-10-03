import "dotenv/config";
import express from "express";
import cors from "cors";

import deviceDataRoutes from "./routes/deviceDataRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", deviceDataRoutes);

app.get("/", (req, res) => res.send("Dashboard's Backend"));

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
