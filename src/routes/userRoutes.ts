import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userRouter = express.Router();

userRouter.post("/createUser", async (req, res) => {
    try {
        const user = await prisma.users.create({
            data: req.body,
        });
        res.json({
            failure: false,
            data: user,
        });
    } catch (err) {
        res.json({
            failure: true,
            message: err,
        });
    }
});

export default userRouter;
