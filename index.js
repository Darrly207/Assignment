const express = require("express");
const dotevn = require("dotenv");
const { default: mongoose } = require("mongoose");
const routes = require("./routers/index");
const cors = require("cors");
dotevn.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors({}));

routes(app);

mongoose
  .connect(`${process.env.linkDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connect success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("server is running on port", port);
});
