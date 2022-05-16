import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import ResponseList from './components/ResponseList/ResponseList';
import './App.scss';

function App() {

	const promptExamples = [
        "Write a poem about the changing seasons.",
        "Write a tagline for a sports equipment store.",
        "Explain the concept of a washing machine to a 5 year old.",
        "Write a tagline for a whitewater rafting school.",
        "Give me a new and original idea for a rock and roll band's name.",
        "What is the distance from the moon to the sun?",
        "Give me an idea for what I should sell in my Shopify store."
    ]
	
	const [prompt, setPrompt] = useState('');

	const [example, setExample] = useState('');
	
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
		if (!event.target.prompt.value) {
			setError(true);
			return;
		}
        const userInput = event.target.prompt.value;
        setPrompt(userInput);
        event.target.reset();
    }

	const handlePromptExample = () => {
        console.log('handling examples')
        // randomly select from examples array and set it in state
        const selectedExample = promptExamples[Math.floor(Math.random() * promptExamples.length)];
        setExample(selectedExample);
        console.log("selectedExample state: " + selectedExample);
    };

    useEffect(() => {

		if (!prompt) return;

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

		getCompletion();

		// if (prompt) {getCompletion()};

		console.log("useEffect running");

		return () => {
			setPrompt('');
		}

    }, [prompt])

	return (
		<div className="App">
			<h1>AI Response Generator</h1>
			<Form
				handlePromptExample={handlePromptExample}
				example={example}
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
