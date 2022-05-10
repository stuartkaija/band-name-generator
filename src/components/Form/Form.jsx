import React from 'react';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    return (
        <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
            <h2 className='form__title'>Enter a prompt for the AI overlords</h2>
            <label htmlFor="prompt" hidden>Enter prompt here</label>
            {error ? <p className='form__error'>the AI overlords require words</p> : ''}
            <textarea className={error ? 'form__textarea form__textarea--error' : 'form__textarea'} name="prompt" id="prompt" cols="30" rows="10" placeholder='e.g. write a tagline for a music store that sells guitars'></textarea>
            <button className='form__button' type='submit' form='promptForm'>Submit</button>
        </form>
    )
}
