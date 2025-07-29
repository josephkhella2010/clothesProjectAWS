/* const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json()); // ✅ Needed to parse POST body

const getProducts = require("./ApiRouter/ProductRouter");

app.use(getProducts);
app.use("/api", require("./ApiRouter/UsersRouter"));

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
 */
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ✅ Prefix with /api
app.use("/api", require("./ApiRouter/UsersRouter"));
app.use("/api", require("./ApiRouter/ProductRouter"));
app.use("/api", require("./ApiRouter/LoginUser"));
app.use("/api", require("./ApiRouter/AddCartRout"));

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
