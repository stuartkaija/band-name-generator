import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';

export default function Form({handleSubmit}) {

    return (
        <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
            <h2 className='form__title'>Enter a prompt for the AI overlords</h2>
            <label htmlFor="prompt" hidden>Enter prompt here</label>
            <textarea className='form__textarea' name="prompt" id="prompt" cols="30" rows="10" placeholder='Showing, not just telling, is often the secret to a good prompt...'></textarea>
            <button className='form__button' type='submit' form='promptForm'>Submit</button>
        </form>
    )
}
