import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import ResponseList from './components/ResponseList/ResponseList';
import './App.scss';

function App() {
	
	const [prompt, setPrompt] = useState('');
	
    const [completions, setCompletions] = useState([
		{
			time: "6/1/2006",
			prompt: "Write a tagline for the coolest snowboard shop on the internet",
			completion: "Keeping it cool on the slopes!"
		}
	]);

	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
        event.preventDefault();
		setError(false);
		console.log("handling submit!");
		if (!event.target.prompt.value) {
			setError(true);
			return;
		}
        const userInput = event.target.prompt.value;
        setPrompt(userInput);
        event.target.reset();
    }

    useEffect(() => {

        const url = "https://api.openai.com/v1/engines/text-curie-001/completions"
        const data = {
            prompt: prompt,
            max_tokens: 30,
            temperature: 1
        }
        const config = {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }

        const getCompletion = async () => {
            try {
                const response = await axios.post(url, data, config)
				const timestamp = new Date().toLocaleDateString();
				setCompletions([{
					time: timestamp,
					prompt: prompt,
					completion: response.data.choices[0].text
				}, ...completions])

            } catch (error) {
                console.log(error);
				// send something to user indicated an error on the server and what the error is
            }
        }

		// if (prompt) {getCompletion()};

        console.log("useEffect running");

    }, [prompt])

	return (
		<div className="App">
			<h1 className='App__title'>AI Poetry Generator</h1>
			<Form
				handleSubmit={handleSubmit}
				error={error}
			/>
			<ResponseList
				completions={completions}
			/>
		</div>
	);
}

export default App;
