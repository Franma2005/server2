const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/number", (req, res) => {
    const json = req.body;
    json.number.push(parseInt([Math.random() * 10]));
    console.log(json);
    res.send(json);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});