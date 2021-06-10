const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./src/models');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
  app.use(cors());
  next();
});

app.use(express.json());
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Backend executado com sucesso!');
  });
});
