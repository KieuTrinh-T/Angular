const express = require('express');
const app = express();
const port = 4000;
const morgan = require("morgan")
app.use(morgan("combined"))
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors())
app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})
app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData2");
fashionCollection = database.collection("Fashion");

app.get("/fashion", async(req, res) => {
    const result = await fashionCollection.find().toArray();
    res.send(result)
})