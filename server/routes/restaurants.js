import express from "express";
import { restaurantsModel } from "../model/restaurantModel.js";

import {
  deleteRestaurant,
  updateRestaurant,
  getRestaurantById,
} from "../controllers/restaurants.js";
const router = express.Router();

router.get("/restaurants", async (request, response) => {
  const myRestaurants = await restaurantsModel.find();
  response.json({
    data: myRestaurants,
  });
});

router.post("/restaurant", async (request, response) => {
  const body = request.body;
  const newRestaurant = new restaurantsModel(body);
  const result = await newRestaurant.save();
  response.json({
    data: result,
  });
});

router.get("/restaurant/:id", getRestaurantById);

router.delete("/restaurant/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await deleteRestaurant(id);
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
router.put("/restaurant/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const restaurant = await updateRestaurant({
      id,
      ...body,
    });
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
