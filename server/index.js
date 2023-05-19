import express from "express";
import cors from "cors";
import restaurantRouter from "./routes/restaurants.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/", restaurantRouter);
app.all("*", (req, res) => res.send("That route doesn't exist"));

export default app;
