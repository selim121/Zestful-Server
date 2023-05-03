const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const allData = require('./data/allData.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Zestful is running')
});

app.get('/allData', (req, res) => {
    res.send(allData);
})

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    const item = allData.find((chef) => chef.id == id);
    res.send({item});
})


app.listen(port, () => {
    console.log(`Zestful API is running on port: ${port}`);
})