const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
const getProducts = require("./ApiRouter/ProductRouter");
const getUsers = require("./ApiRouter/UsersRouter");

app.use(getProducts);
app.use(getUsers);

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
