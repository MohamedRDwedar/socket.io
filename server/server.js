const path = require('path');
const express = require('express');

const publishPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publishPath));

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
