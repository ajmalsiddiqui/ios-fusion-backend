const express = require('express');

const config = require('./config');
const userRoutes = require('./routes/user');
const refreshmentRoutes = require('./routes/refreshment');

const app = express();

app.use('/users', userRoutes);
app.use('/refreshments', refreshmentRoutes);

app.listen(config.port, () => {
  console.log('Server running at port ' + config.port);
});
