import express from 'express';
import FoodController from './controllers/FoodController';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen('8080');
app.get('/', (req, res) => {
  res.send('FoodMenu Backend is running');
});
app.post('/food', async (req, res) => {
  const { name, cost } = req.body;
  await FoodController.addFoodItem(res, name, cost);
});
app.get('/food', async (req, res) => {
  await FoodController.getFoodItems(res);
});
app.put('/price', async (req, res) => {
  const { name, cost } = req.body;
  await FoodController.updateFoodByPrice(res, name, cost);
});
app.delete('/food', async (req, res) => {
  const { name } = req.body;
  await FoodController.deleteFoodByName(res, name);
});
