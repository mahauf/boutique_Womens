var express = require('express')
var cors = require('cors')
var app = express()
const obj =[
    {	
        id :	1,
        title :	"AVAASA",
        price :	109,
        description	: "Women Silk Saree",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/91Esh8L3H8L._SL1500_.jpg"
    },
    {
        id :	2,
        title :	"HM",
        price :	109.95,
        description	: "Women cotten Kurta",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/71AEZtDM7IL._SL1440_.jpg"
    },
    {
        id :	3,
        title :	"Indo Era",
        price :	109.95,
        description	: "Women A-line Dress",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/71Hf9fAHcYL._SL1500_.jpg"
    },
    {
        id :	4,
        title :	"LIBAS",
        price :	109.95,
        description	: "Women Ethnic Dress",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/7132GDg8UAL._SL1500_.jpg"
    },
    {
        id :	5,
        title :	"Janasya",
        price :	109.95,
        description	: "Women Fit and Flare Dress",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/81mFBU3PjCS._SL1500_.jpg"
    }]

    app.use(cors())
    app.get('/product', (req,res)=>{
        res.json(obj)
    }).listen(4000, () => console.log('listeing on port 4000'))