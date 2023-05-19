import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
const RestaurantSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuid(),
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  img: {
    type: String,
  },
  type: {
    type: String,
  },
});
export const restaurantsModel = mongoose.model("Restaurant", RestaurantSchema);
