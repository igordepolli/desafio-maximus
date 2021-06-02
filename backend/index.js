const app = require('express')();

app.listen(3000, () => {
    console.log("Backend executado com sucesso!")
})

app.get("/", (req, res) => {
    res.send("Ok")
})