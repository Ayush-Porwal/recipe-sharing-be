import express from "express";
import dotenv from "dotenv";

// importing defined routes here
import userRouter from "./src/routes/userRoutes";
import recipeRouter from "./src/routes/reciperRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/user", userRouter);
app.use("/recipe", recipeRouter);

app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
