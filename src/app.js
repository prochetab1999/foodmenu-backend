import express from 'express';
import { Schema, connect, model } from 'mongoose';

connect(
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0',
  {
    dbName: 'foodmenu',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const foodSchema = Schema({
  name: String,
  cost: Number,
});
const Food = model('Food', foodSchema);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen('8080');
app.get('/', (req, res) => {
  res.send('FoodMenu Backend is running');
});
app.post('/food', async (req, res) => {
  try {
    const foodResponse = await new Food({
      name: req.body.name,
      cost: req.body.cost,
    }).save();
    res.json(foodResponse);
    res.status(200);
  } catch {
    res.send('food item cannot be added');
  }
});
app.get('/food', async (req, res) => {
  try {
    const foodResponse = await Food.find({});
    res.json(foodResponse);
    res.status(200);
  } catch (err) {
    res.send('cannot retrieve food items');
  }
});
