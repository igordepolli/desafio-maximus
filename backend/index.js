const express = require('express');
// const consign = require('consign');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./src/models');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});

// consign().then('./src/config/middlewares.js').into(app);

app.use(express.json());
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Backend executado com sucesso!');
  });
});
