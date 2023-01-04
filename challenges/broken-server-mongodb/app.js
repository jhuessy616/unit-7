require("dotenv").config();
const express = require("express");
const app = express();
const userController = require("./controllers/user.controller");
const gameController = require("./controllers/game.controller");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASEURL);
const db = mongoose.connection;

db.once("open", () => console.log("Connected to the Db " + db.name));

app.use(express.json());
app.use("/user", userController);
app.use("/game", gameController);

app.listen(process.env.PORT, function () {
 console.log(`YOURFILE app is listening on port ${process.env.PORT}`);
});
