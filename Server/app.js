import express from "express";
import "dotenv/config";
import { connectdb } from "./config/dataBase.js";
import { apiRouter } from "./router/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
connectdb();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173","https://entri-ecom-adminclient.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api", apiRouter);
