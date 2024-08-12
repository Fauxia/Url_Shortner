const express = require("express");
const { handleUrl, getHandleId } = require("./controllers/urlController");
const { mongooseConnect } = require("./connect");
const router = require("./routes/url");

const app = express();
const PORT = 4000;

mongooseConnect("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongodb CONNECTED")
);

app.use(express.json());
app.use("/url", router);

// app.get("/gem", getHandleId);

app.listen(PORT, () => {
  console.log("Server is running");
});
