import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';

export default function Form() {

    const [prompt, setPrompt] = useState('');
    const [completions, setCompletions] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const userInput = event.target.prompt.value;
        setPrompt(userInput);
        event.target.reset();
    }

    //useEffect to make call to API
    useEffect(() => {

        const url = "https://api.openai.com/v1/engines/text-curie-001/completions"
        const data = {
            prompt: "Tell me this is it",
            max_tokens: 5,
            temperature: 1          
        }
        const config = {
            headers: {
                Authorization: "api key goes here"
            }
        }

        const getCompletion = async () => {
            try {
                const response = await axios.post(url, data, config)
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        // getCompletion();

        console.log("useEffect running")

    }, [prompt])

    return (
        <form name='promptForm' id='promptForm' onSubmit={handleSubmit}>
            <h2>Submit a prompt to the AI overlords</h2>
            <label htmlFor="prompt">Enter prompt here</label>
            <textarea name="prompt" id="prompt" cols="30" rows="10" placeholder='Showing, not just telling, is often the secret to a good prompt...'></textarea>
            <button type='submit' form='promptForm'>Submit</button>
        </form>
    )
}
