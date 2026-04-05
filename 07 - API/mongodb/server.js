// server.js
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config(); // load .env variables

const PORT = process.env.PORT || 3000;

// connect to DB first — then start server
connectDB().then(() => {
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});