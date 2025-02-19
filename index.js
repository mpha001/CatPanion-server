import express from "express";
import "dotenv/config";
import cors from "cors";
import routes from "./routes/data-routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Welcome to the Backend!");
});
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
