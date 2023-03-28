const express = require('express');
const app = express();
const port = 3000;
const morgan = require("morgan")
app.use(morgan("combined"))
const bodyParser = require("body-parser")
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Restful API!')
})
app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})


const cors = require("cors");
app.use(cors())

let database = [{
        "BookId": "b1",
        "BookName": "Kỹ thuật lập trình cơ bản",
        "Price": 70,
        "Image": "b1.png"
    },
    {
        "BookId": "b2",
        "BookName": "Kỹ thuật lập trình nâng cao",
        "Price": 100,
        "Image": "b2.png"
    },
    { "BookId": "b3", "BookName": "Máy học cơ bản", "Price": 200, "Image": "b3.png" },
    { "BookId": "b4", "BookName": "Máy học nâng cao", "Price": 300, "Image": "b4.png" },
    { "BookId": "b5", "BookName": "Lập trình Robot cơ bản", "Price": 250, "Image": "b5.png" },
]
app.get("/books", cors(), (req, res) => {
    res.send(database)
})
app.get("/books/:id", cors(), async(req, res) => {
    const id = req.params["id"];
    const result = database.find(x => x.BookId == id);
    res.send(result)

})
app.post("/books", cors(), async(req, res) => {
    database.push(req.body);
    res.send(database)
})

let bakeries = [{
        "Id": 1,
        "Name": "Bánh mỳ đen",
        "Price": 15000,
        "ExpDate": "2023-03-28",
        "Rating": 4.3,
        "Image": "f1.webp"
    },
    {
        "Id": 2,
        "Name": "Bánh mỳ gối",
        "Price": 22000,
        "ExpDate": "2023-04-28",
        "Rating": 4.8,
        "Image": "f2.webp"
    },
    {
        "Id": 3,
        "Name": "Bánh mỳ gối đen",
        "Price": 25000,
        "ExpDate": "2023-03-30",
        "Rating": 3.7,
        "Image": "f3.webp"
    },
    {
        "Id": 4,
        "Name": "Bánh mỳ gối tinh chất than tre",
        "Price": 34000,
        "ExpDate": "2023-04-02",
        "Rating": 3.8,
        "Image": "f4.webp"
    },
    {
        "Id": 5,
        "Name": "Bánh mỳ hoa cúc đậu đỏ",
        "Price": 17000,
        "ExpDate": "2023-04-05",
        "Rating": 5.0,
        "Image": "f5.webp"
    },
    {
        "Id": 6,
        "Name": "Bánh mỳ que bò phomai",
        "Price": 19000,
        "ExpDate": "2023-04-03",
        "Rating": 4.1,
        "Image": "f6.webp"
    },
    {
        "Id": 7,
        "Name": "Bánh hamburger",
        "Price": 19000,
        "ExpDate": "2023-03-21",
        "Rating": 4.8,
        "Image": "f7.webp"
    },
    {
        "Id": 8,
        "Name": "Bánh mì Hàn Quốc chocolate",
        "Price": 32000,
        "ExpDate": "2023-03-25",
        "Rating": 4.5,
        "Image": "f8.webp"
    },
    {
        "Id": 9,
        "Name": "Bánh mỳ ngũ cốc",
        "Price": 15000,
        "ExpDate": "2023-04-01",
        "Rating": 4.5,
        "Image": "f9.webp"
    },
    {
        "Id": 10,
        "Name": "Bánh mỳ nhỏ",
        "Price": 17000,
        "ExpDate": "2023-04-07",
        "Rating": 4.8,
        "Image": "f10.webp"
    },
    {
        "Id": 11,
        "Name": "Bánh mỳ gối nho",
        "Price": 25000,
        "ExpDate": "2023-03-27",
        "Rating": 4.7,
        "Image": "f11.webp"
    },
    {
        "Id": 12,
        "Name": "Bánh mỳ gối nho",
        "Price": 19000,
        "ExpDate": "2023-05-02",
        "Rating": 4.9,
        "Image": "f12.webp"
    },
    {
        "Id": 13,
        "Name": "Bánh mỳ que phomai ruốc",
        "Price": 17000,
        "ExpDate": "2023-04-15",
        "Rating": 5.0,
        "Image": "f13.webp"
    },
    {
        "Id": 14,
        "Name": "Bánh mỳ hoa cúc lá dứa",
        "Price": 19000,
        "ExpDate": "2023-04-12",
        "Rating": 4.1,
        "Image": "f14.webp"
    },
    {
        "Id": 15,
        "Name": "Bánh mỳ hoa cúc lá dứa",
        "Price": 55000,
        "ExpDate": "2023-04-08",
        "Rating": 4.8,
        "Image": "f15.webp"
    }


]
app.get("/bakeries", cors(), (req, res) => {
    res.send(bakeries)
})

app.get("/bakeries/:rating/", cors(), async(req, res) => {

    const rating = req.params["rating"];
    const expDate_str = req.params["expDate"];
    var now = new Date();
    const result = bakeries.filter(x => {
        var expDate = new Date(x.ExpDate);
        return x.Rating >= rating && expDate >= Date.now()
    });
    res.send(result)
})