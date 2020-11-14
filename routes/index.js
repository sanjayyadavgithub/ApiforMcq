const express = require('express');

const router = express.Router();

router.use('/api', require('./api.v0.js'));

router.get("/", (req, res, next) => {
    res.send("<h1>if you want to access api end points first run /node migration.js/ file to send data into database then use endpoints like : for data :- http://localhost:8080/api/data   ,for Answer of Question:-  http://localhost:8080/api/answers , for Question :-   http://localhost:8080/api/questions </h1> ");
})


module.exports = router;
