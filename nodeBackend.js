const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PostSchema = require("./models/Post");

// Init backend Express app
const port = process.argv[2] || 3005;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use(express.static(__dirname + "/ui/build"));
// -------------------------

// Init MongoDB
mongoose.connect(
  "mongodb+srv://dbUser:ragmaster6@cluster0.rhuxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection failed ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

//--------------------------

app.post("/addPost", async (req, res) => {
  const postWriter = new PostSchema(req.body);
  postWriter.save((err) => {
    if (err) {
      res.status(400).send();
    } else {
      res.json(postWriter);
    }
  });
});

app.get("/getFeed", async (req, res) => {
  const postWriter = await PostSchema.find();
  res.json(postWriter);
});

app.get("/getStuff", (req, res) => {
  console.log("/getStuff initiated!");
  var reply = {
    title: "Fuck youuuuuuuuuuu!",
    body: "Meme code here...",
  };
  res.json(JSON.stringify(reply));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
