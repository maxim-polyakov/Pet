const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();
app.use(cors());


app.use('/petapi', createProxyMiddleware({ target: process.env.PET_SERVICE_URL, changeOrigin: true, }))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`)
})