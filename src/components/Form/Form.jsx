import React from 'react';
import './Form.scss';

export default function Form() {
    return (
        <form>
            <h2>Submit a prompt to the AI overlords</h2>
            <label htmlFor=""></label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter a prompt...'></textarea>
            <button>Submit</button>
        </form>
    )
}
