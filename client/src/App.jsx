import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Response from './components/Response/Response';
import './App.scss';

function App() {
	
	// const [prompt, setPrompt] = useState('');
	// const [model, setModel] = useState('text-curie-001');
	// const [error, setError] = useState(false);
	const [genre, setGenre] = useState('rock')
    const [completion, setCompletion] = useState({});

	const handleSubmit = (event) => {
        event.preventDefault();
		const genre = event.target.genre.value;
		console.log(genre);
		// setError(false);
		// const userInput = event.target.prompt.value;
		// const model = event.target.model.value;

		// if (!userInput) {
		// 	setError(true);
		// 	return;
		// }
		setGenre(genre);
        // setPrompt(userInput);
		// setModel(model);
    }

	useEffect(() => {
		if (!prompt) return;

		axios.post("http://localhost:8080/", {
			prompt: prompt,
			// model: model
		})
		.then(response => setCompletion({
			// model: model,
			// prompt: prompt,
			completion: response.data.text
		}))
		.catch(error => console.log(`error: ${error}`))

		// setting prompt back to empty string allows user to submit same prompt repeatedly
		// setPrompt('');

	}, [prompt])

	return (
		<main className="App">
			<h1>Band Name Generator</h1>
			<Form
				handleSubmit={handleSubmit}
				// error={error}
			/>
			<Response
				completion={completion.completion}
			/>
		</main>
	);
}

export default App;
