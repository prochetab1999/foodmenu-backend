import Db from '../model/Db';

const addFoodItem = async (name, cost) => {
  const food = new Db.Food({
    name,
    cost,
  });
  try {
    const isFoodPresent = await Db.Food.findOne({ name });
    if (isFoodPresent) {
      return ('Food Item already present');
    }
    const response = await food.save();
    return response;
  } catch (err) {
    return 'Food Item cannot be added';
  }
};
const getFoodItems = async () => {
  try {
    const response = await Db.Food.find();
    return response;
  } catch (err) {
    return 'cannot retrieve food items';
  }
};
const updateFoodByPrice = async (name, cost) => {
  try {
    const response = await Db.Food.updateOne({ name }, {
      cost,
    });
    return response;
  } catch (err) {
    return 'cannot update price';
  }
};
const deleteFoodByName = async (name) => {
  try {
    const response = await Db.Food.deleteOne({ name });
    return response;
  } catch (err) {
    return 'cannot delete food item';
  }
};
export default {
  addFoodItem, getFoodItems, updateFoodByPrice, deleteFoodByName,
};
