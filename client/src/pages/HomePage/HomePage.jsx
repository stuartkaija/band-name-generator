import React, { useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form/Form';
import Response from '../../components/Response/Response';
import './HomePage.scss';

export default function HomePage() {

	const [genre, setGenre] = useState('')
    const [completion, setCompletion] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
        event.preventDefault();
		setError(false);
		const genre = event.target.genre.value;
		
		if (!genre) {
			setError(true)
			return;
		}
		
		setGenre(genre);

		axios
			.post("http://localhost:8080/", {genre: genre})
			.then(response => setCompletion(response.data))
			.catch(error => console.log(`error: ${error}`))
    }

    return (
        <div>
			<nav>
				<h1>Band Name Generator</h1>
				<p>Link To About Page</p>
			</nav>
			<Form
				handleSubmit={handleSubmit}
				error={error}
			/>
			<Response
				completion={completion}
			/>
        </div>
    )
}
