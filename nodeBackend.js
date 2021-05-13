const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.argv[2];

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

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/ui/build/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
