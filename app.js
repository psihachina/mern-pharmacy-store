const express = require('express');
const routes = require("./Routes");

const app = express();
app.use(express.static(__dirname+'/client/dist'))
app.use("/", routes);


app.listen(3000, () => {
    console.log('Server run');
});