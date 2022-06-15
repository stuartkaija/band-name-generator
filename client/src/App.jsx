import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import ResponseList from './components/ResponseList/ResponseList';
import './App.scss';

function App() {
	
	const [prompt, setPrompt] = useState('');
	const [engine, setEngine] = useState('text-curie-001');
    const [completions, setCompletions] = useState([
		{
			engine: "text-curie-001",
			prompt: "Write a tagline for the coolest snowboard shop on the internet",
			completion: "Setting you up for the coolest gear for the slopes."
		}
	]);
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
        event.preventDefault();
		setError(false);
		const userInput = event.target.prompt.value;
		const engine = event.target.engine.value;

		if (!userInput) {
			setError(true);
			return;
		}

        setPrompt(userInput);
		setEngine(engine);
    }

	useEffect(() => {
		if (!prompt) return;

		axios.post("http://localhost:8080/", {
			prompt: prompt,
			engine: engine
		})
		.then(response => setCompletions([{
			engine: engine,
			prompt: prompt,
			completion: response.data.text
		}, ...completions]))
		.catch(error => console.log(`error: ${error}`))

	}, [prompt])

	return (
		<main className="App">
			<h1>AI Response Generator</h1>
			<Form
				handleSubmit={handleSubmit}
				error={error}
			/>
			<ResponseList
				completions={completions}
			/>
		</main>
	);
}

export default App;
