let express = require("express");
let app = express();

//console.log("Hello World");
/*
app.get("/", (req, res) => {
  res.send("Hello Express");
});
*/
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//console.log(response);
const MESSAGE_STYLE = process.env.MESSAGE_STYLE;
app.get("/json", (req, res) => {
  //let response = "Hello json".toUpperCase();
  res.json({
    message:
      MESSAGE_STYLE == process.env.MESSAGE_STYLE ? "HELLO JSON" : "Hello json",
  });
});
module.exports = app;
