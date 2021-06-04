const express = require('express');
const routes = require('./routes');
const sequelize = require('./src/models');
const consign = require('consign');

const app = express();

consign().then('./src/config/middlewares.js').into(app);

app.use(express.json());
app.use(routes);

sequelize.sync({force: true}).then (() => {
    app.listen(3000, () => {
        console.log("Backend executado com sucesso!")
    });
})
