const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}
const { default: axios } = require('axios');

// config
require('dotenv').config();
const port = process.env.PORT || 8081;

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));

// routes
app.post("/", (req, res) => {
    const { genre } = req.body;

    const url = `https://api.openai.com/v1/completions`
    const data = {
        model: "text-curie-001",
        prompt: `Give me an original name for a band that plays ${genre} music. Do not use any curse words. The name must be original, and not already in use by another band.`,
        max_tokens: 60,
        temperature: 1
    }
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    }

    axios
        .post(url, data, config)
        .then((response) => res.json(response.data.choices[0].text))
        .catch(error => console.log(`Error: ${error}`))
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});