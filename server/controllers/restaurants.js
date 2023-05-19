import { restaurantsModel } from "../model/restaurantModel.js";

export const getRestaurantById = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await restaurantsModel.findOne({ id: restaurantId });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export async function deleteRestaurant(id) {
  const result = await restaurantsModel.findOneAndDelete({ id });
  return id;
}

export async function updateRestaurant(restaurant) {
  console.log("restaurant:", restaurant);
  const { id, ...updatingObj } = restaurant;
  return await restaurantsModel.findOneAndUpdate({ id }, updatingObj, {
    new: true,
  });
}
