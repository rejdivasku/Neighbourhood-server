const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/post");
app.use("/post", postRouter);

const categoryRouter = require("./routes/Category");
app.use("/category", categoryRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const admnsRouter = require("./routes/Admns");
app.use("/admns", admnsRouter);

db.sequelize.sync().then(() => {
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Listening to port ${port}`));
});