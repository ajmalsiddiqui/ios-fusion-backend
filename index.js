const express = require('express');

const config = require('./config');
const userRoutes = require('./routes/user');

const app = express();

app.use('/users', userRoutes);

app.listen(config.port, () => {
  console.log('Server running at port ' + config.port);
});
