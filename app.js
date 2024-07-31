const express = require("express");
const app = express();
const dotenv = require("dotenv");
const logger = require("morgan");

app.use(logger("tiny"));

dotenv.config({ path: "./.env" });

const indexRoute = require("./Routes/indexRouter.js");

app.use("/", indexRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
