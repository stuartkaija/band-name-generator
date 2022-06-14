const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');

// config
require('dotenv').config();
const port = process.env.PORT || 8081;

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// routes
app.post("/", (req, res) => {
    const { prompt, engine } = req.body;

    const url = `https://api.openai.com/v1/engines/${engine}/completions`
    const data = {
        prompt: prompt,
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
        .then(response => res.json(response.data.choices[0]))
        .catch(error => console.log(error))
});


app.listen(port, () => {
    console.log('Server is running on 8080');
});

	// 	const url = `https://api.openai.com/v1/engines/${engine}/completions`;
    //     const data = {
    //         prompt: prompt,
    //         max_tokens: 60,
    //         temperature: 1
    //     };
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    //         }
    //     };

    //     const getCompletion = async () => {
    //         try {
    //             const response = await axios.post(url, data, config)
	// 			setCompletions([{
	// 				engine: engine,
	// 				prompt: prompt,
	// 				completion: response.data.choices[0].text
	// 			}, ...completions]);

    //         } catch (error) {
    //             console.log(error);
	// 			alert(error.message);
    //         }
    //     }