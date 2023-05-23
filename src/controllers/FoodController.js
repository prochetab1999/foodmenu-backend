import FoodService from '../services/FoodService';

const addFoodItem = async (res, name, cost) => {
  const response = await FoodService.addFoodItem(name, cost);
  res.json(response);
};
const getFoodItems = async (res) => {
  const response = await FoodService.getFoodItems();
  res.json(response);
};
export default { addFoodItem, getFoodItems };
