import Db from '../model/Db';

const addFoodItem = async (name, cost) => {
  const food = new Db.Food({
    name,
    cost,
  });
  try {
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

export default { addFoodItem, getFoodItems };
