import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import ResponseList from './components/ResponseList/ResponseList';
import './App.scss';

function App() {

	const [prompt, setPrompt] = useState('');
	
	// completions will be an array of objects, each object consistin of the user inputted prompt and the completion *and timestamp which I think comes in the completion data* returned by the API
    const [completions, setCompletions] = useState([
		{
			time: "timestamp goes here",
			prompt: "EL5: What does a washing machine do?",
			completion: "It cleans clothing using water and soap and by shaking and moving the clothing and water and soap around in a large tub"
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
            max_tokens: 20,
            temperature: 1
        }
        const config = {
            headers: {
                Authorization: "Bearer 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"
            }
        }
		const timestamp = new Date();

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
			<h1 className='App__title'>Title!</h1>
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
