const express = require("express");
const cors = require("cors");
const app = express();

// connect to dotenv
require("dotenv").config();
const port = process.env.PORT;

// connect to db
require("./config/mongoose.config");

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// allows cross-origin requests
app.use(cors());

// user routes that are tied to user crud functions
require("./routes/product.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
