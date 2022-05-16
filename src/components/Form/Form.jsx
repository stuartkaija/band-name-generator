import React, { useState } from 'react';
import './Form.scss';

export default function Form({handlePromptExample, example, handleSubmit, error}) {

    return (
        <section>
            <h2 className='form__title'>Enter a prompt for the AI</h2>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <button className='form__button' type='button' onClick={handlePromptExample}>Click to generate an example prompt</button>
                <label htmlFor="prompt" hidden>Enter prompt here</label>
                <p className={error ? 'form__error' : 'form__error--hidden'}>the AI overlords require words</p>
                <textarea
                    className={error ? 'form__textarea form__textarea--error' : 'form__textarea'}
                    name="prompt"
                    id="prompt"
                    placeholder='e.g. write a tagline for a music store that sells guitars'
                    defaultValue={example ? example : ''}
                ></textarea>
                <button className='form__button--submit' type='submit' form='promptForm'>Submit</button>
            </form>
        </section>
    )
}
