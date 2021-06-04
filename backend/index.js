const express = require('express');
const routes = require('./routes');
const sequelize = require('./src/models');

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync({force: true}).then (() => {
    app.listen(3000, () => {
        console.log("Backend executado com sucesso!")
    });
})
