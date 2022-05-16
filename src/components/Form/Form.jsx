import React from 'react';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    return (
        <section>
            <h2 className='form__title'>Enter a prompt for the AI</h2>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <p>add instructions on how to enter a good prompt</p>
                <label htmlFor="engine">Select an AI engine</label>
                <select name="engine" id="engine" defaultValue="text-curie-001">
                    <option value="text-davinci-002">text-davinci-002</option>
                    <option value="text-curie-001">text-curie-001</option>
                    <option value="text-babbage-001">text-babbage-001</option>
                    <option value="text-ada-001">text-ada-001</option>
                </select>
                <label htmlFor="prompt">Enter prompt here</label>
                <textarea
                    className={error ? 'form__textarea form__textarea--error' : 'form__textarea'}
                    name="prompt"
                    id="prompt"
                    placeholder='e.g. write a poem about a dog who loves to wear sandals'
                ></textarea>
                <p className={error ? 'form__error' : 'form__error--hidden'}>please type a descriptive prompt for the AI!</p>
                <button className='form__button--submit' type='submit' form='promptForm'>Submit</button>
            </form>
        </section>
    )
}
