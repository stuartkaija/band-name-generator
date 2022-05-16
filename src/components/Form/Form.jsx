import React from 'react';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    return (
        <section>
            <h2 className='form__title'>Enter a prompt for the AI</h2>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <label htmlFor="prompt" hidden>Enter prompt here</label>
                <p className={error ? 'form__error' : 'form__error--hidden'}>the AI overlords require words</p>
                <textarea
                    className={error ? 'form__textarea form__textarea--error' : 'form__textarea'}
                    name="prompt"
                    id="prompt"
                    placeholder='e.g. write a tagline for a music store that sells guitars'
                ></textarea>
                <button className='form__button--submit' type='submit' form='promptForm'>Submit</button>
            </form>
        </section>
    )
}
