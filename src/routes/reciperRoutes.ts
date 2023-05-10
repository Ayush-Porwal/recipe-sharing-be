import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const recipeRouter = express.Router();

// get all the recipes
// TODO: add pagination
recipeRouter.get("/", async (req, res) => {
    const allRecipes = await prisma.recipes.findMany();
    res.send(
        JSON.stringify({
            data: allRecipes,
        })
    );
});

// add a recipe
recipeRouter.post("/createRecipe", async (req, res) => {
    try {
        const recipe = await prisma.recipes.create({
            data: {
                ...req.body,
            },
        });
        res.json({
            failure: false,
            message: recipe,
        });
    } catch (err) {
        res.json({
            failure: true,
            message: err,
        });
    }
});

export default recipeRouter;
