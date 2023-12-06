require('dotenv').config();
const express = require("express");
const app = express();
const routes = require("./routes");
const port = process.env.PORT;
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, ()=> console.log(`listening on port ${port}`));
