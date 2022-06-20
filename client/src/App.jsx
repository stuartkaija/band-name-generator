import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import ResponseList from './components/ResponseList/ResponseList';
import './App.scss';

function App() {
	
	const [prompt, setPrompt] = useState('');
	const [model, setModel] = useState('text-curie-001');
    const [completions, setCompletions] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (event) => {
        event.preventDefault();
		setError(false);
		setLoading(true);
		const userInput = event.target.prompt.value;
		const model = event.target.model.value;

		if (!userInput) {
			setError(true);
			return;
		}

        setPrompt(userInput);
		setModel(model);
    }

	useEffect(() => {
		if (!prompt) return;

		axios.post("http://localhost:8080/", {
			prompt: prompt,
			model: model
		})
		.then(response => setCompletions([{
			model: model,
			prompt: prompt,
			completion: response.data.text
		}]))
		.catch(error => console.log(`error: ${error}`))

		// setting prompt back to empty string allows user to submit same prompt repeatedly
		setPrompt('');

	}, [prompt])

	useEffect(() => {
		console.log('things are loading');
	}, [loading])

	return (
		<main className="App">
			<h1>AI Response Generator</h1>
			<Form
				handleSubmit={handleSubmit}
				error={error}
			/>
			<ResponseList
				completions={completions}
				loading={loading}
			/>
		</main>
	);
}

export default App;
