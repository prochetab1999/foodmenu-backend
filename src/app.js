import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen('8080');
app.get('/', (req, res) => {
  res.send('FoodMenu Backend is running');
});
