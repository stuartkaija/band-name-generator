import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';

export default function Form() {

    const [prompt, setPrompt] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const userInput = event.target.prompt.value;
        setPrompt(userInput);
        event.target.reset();
    }

    //useEffect to make call to API
    useEffect(() => {
        axios
            .get()
            .then()
            .catch()
    }, [prompt])

    return (
        <form name='promptForm' id='promptForm' onSubmit={handleSubmit}>
            <h2>Submit a prompt to the AI overlords</h2>
            <label htmlFor="prompt">Enter prompt here</label>
            <textarea name="prompt" id="prompt" cols="30" rows="10" placeholder='For example, tell me a story about a young elf from Venus.'></textarea>
            <button type='submit' form='promptForm'>Submit</button>
        </form>
    )
}
