const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/list', require('./routes/list'));
app.use('/request', require('./routes/request'));
app.use('/approve', require('./routes/approve'));
app.use('/deny', require('./routes/deny'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
