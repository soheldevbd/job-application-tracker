require('dotenv').config();
const express = require('express');
const { default: connectDb } = require('./config/mongodb');
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();

app.get('/api/health', function (res, req) {
  return req.json({
    status: 'Ok',
  });
});
app.listen(port, function () {
  console.log('server is running 3000');
});
