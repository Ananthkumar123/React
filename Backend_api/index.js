import express from 'express';

const app = express()

app.get('/api/products', (req, res) => {

    const products = [
        {
            id: 1,
            name: "table Wooden",
            price: 200
        },
        {
            id: 2,
            name: "glass",
            price: 300
        },
        {
            id: 3,
            name: "plastic",
            price: 300
        }, {
            id: 4,
            name: "polyster",
            price: 300
        }

    ]
    if (req.query.search) {
        const filterdProducts = products.filter(pro => pro.name.includes(req.query.search))
        res.send(filterdProducts);
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 2000);
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`seerver reunning ${port}`);

});