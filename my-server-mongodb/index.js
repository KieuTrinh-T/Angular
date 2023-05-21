const express = require('express');
const app = express();
const port = 3002;

const morgan = require("morgan")
app.use(morgan("combined"))

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({ secret: "Shh, its a secret!" }));

const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors = require("cors");
app.use(cors())

app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})

app.get("/fashions", cors(), async(req, res) => {
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
})
app.get("/fashions/:id", cors(), async(req, res) => {
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0])
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");
cosmeticCollection = client.db("Cosmetic").collection("ProductList");

app.post("/fashions", cors(), async(req, res) => {
    const result = await fashionCollection.insertOne(req.body);
    res.send(result)
});

app.put("/fashions", cors(), async(req, res) => {

    //update json Fashion into database
    await fashionCollection.updateOne({ _id: new ObjectId(req.body._id) }, //condition for update
            {
                $set: { //Field for updating
                    style: req.body.style,
                    fashion_subject: req.body.fashion_subject,
                    fashion_detail: req.body.fashion_detail,
                    fashion_image: req.body.fashion_image
                }
            }
        )
        //send Fahsion after updating
    var o_id = new ObjectId(req.body._id);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0])
})
app.delete("/fashions/:id", cors(), async(req, res) => {
    //find detail Fashion with id
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    //update json Fashion into database
    await fashionCollection.deleteOne({ _id: o_id })
        //send Fahsion after remove
    res.send(result[0])
})


// cosmetic
app.get("/cosmetics", cors(), async(req, res) => {
    const result = await cosmeticCollection.find({}).toArray();
    res.send(result)
})
app.get("/cosmetics/:id", cors(), async(req, res) => {
    var o_id = new ObjectId(req.params["id"]);
    const result = await cosmeticCollection.find({ _id: o_id }).toArray();
    res.send(result[0])
})


// cookie

app.get("/create-cookie", cors(), (req, res) => {
    res.cookie("username", "KieuTrinh")
    res.cookie("password", "123456")
    account = {
        "username": "KieuTrinh",
        "password": "123456"
    }
    res.cookie("account", account)
    res.send("cookies are created")
})


app.get("/read-cookie", cors(), (req, res) => {
    //cookie is stored in client, so we use req
    username = req.cookies.username
    password = req.cookies.password
    account = req.cookies.account
    infor = "username = " + username + "<br/>"
    infor += "password = " + password + "<br/>"
    if (account != null) {
        infor += "account.username = " + account.username + "<br/>"
        infor += "account.password = " + account.password + "<br/>"
    }
    res.send(infor)
})

// res
app.get("/clear-cookie", cors(), (req, res) => {
    res.clearCookie("account")
    res.send("[account] Cookie is removed")
})

app.get("/contact", cors(), (req, res) => {
    if (req.session.visited != null) {
        req.session.visited++
            res.send("You visited this page " + req.session.visited + " times")
    } else {
        req.session.visited = 1
        res.send("Welcome to this page for the first time!")
    }
})

app.post("/cart", cors(), (req, res) => {
    product = req.body
    if (req.session.carts == null)
        req.session.carts = []
    req.session.carts.push(product)
    res.send(req.session.carts)
})
app.get("/cart", cors(), (req, res) => {
    res.send(req.session.carts)
})
app.get("/cart/:id", cors(), (req, res) => {
    if (req.session.carts != null) {
        p = req.session.carts.find(x => x._id = req.body._id)
        res.send(p)
    } else
        res.send(null)
})
app.delete("/cart/:id", cors(), (req, res) => {
    if (req.session.carts != null) {
        id = req.params["id"]
        req.session.carts = req.session.carts.filter(x => x._id != id)
        res.send(p)
    }
    res.send(req.session.carts)
})
app.put("/cart", cors(), (req, res) => {
    if (req.session.carts != null) {
        p = req.body
        req.session.carts = req.session.carts.map(x => x.Product._id == p._id ? p : x.Product)
        res.send(p)
    }
    res.send(req.session.carts)
})