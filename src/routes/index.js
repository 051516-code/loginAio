
const Router = require('express');
const route = Router();


route.get('/', (req, res) => {
    res.send("hola desde index router")
})


module.exports = route;