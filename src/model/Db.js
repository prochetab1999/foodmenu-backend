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

export default { foodSchema, Food };
