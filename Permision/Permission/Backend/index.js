require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const find = require('./routes/find.routes');
const connectDB = require('./db');

app.use(cors({
    origin: '*',
}));
app.use(express.json());

connectDB();

app.use("/api/find", find);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});