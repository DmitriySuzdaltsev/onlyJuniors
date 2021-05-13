const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3005;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.get("/getStuff", (req, res) => {
    console.log('/getStuff initiated!')
    var reply = {
        title: 'Fuck you!',
        body: 'Meme code here...'
    }
    res.json(JSON.stringify(reply));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
