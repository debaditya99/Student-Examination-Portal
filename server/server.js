const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const mongoose = require('mongoose');
const router = require('./routes/route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

mongoose.connect('mongodb://127.0.0.1:27017/studentExaminationPortal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });