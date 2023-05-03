const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Zestful is running')
});

app.listen(port, () => {
    console.log(`Zestful API is running on port: ${port}`);
})