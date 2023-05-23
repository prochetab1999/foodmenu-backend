import FoodService from '../services/FoodService';

const addFoodItem = async (res, name, cost) => {
  const response = await FoodService.addFoodItem(name, cost);
  res.json(response);
};
const getFoodItems = async (res) => {
  const response = await FoodService.getFoodItems();
  res.json(response);
};
const updateFoodByPrice = async (res, name, cost) => {
  const response = await FoodService.updateFoodByPrice(name, cost);
  res.json(response);
};
const deleteFoodByName = async (res, name) => {
  const response = await FoodService.deleteFoodByName(name);
  res.json(response);
};
export default {
  addFoodItem, getFoodItems, updateFoodByPrice, deleteFoodByName,
};
