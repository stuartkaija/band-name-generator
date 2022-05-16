import React from 'react';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    return (
        <section className='form-section'>
            <h2 className='form-section__title'>Prompt</h2>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <p className='form__instructions'>Enter a prompt below; once you click submit, the AI engine will return a text completion. The key to a good prompt is to <span className='form__instructions--span'>be explicit and descriptive</span>!</p>
                <p className='form__instructions'>Information on the different engines can be found <a className='form__instructions--link' href="https://beta.openai.com/docs/engines" target='_blank'>here</a>. Broadly speaking, Davinci is the most powerful engine, while Ada is the fastest. Experiment with different engines to see how they impact responses.</p>
                <label className='form__label' htmlFor="engine">Select an AI engine:</label>
                <select className='form__select' name="engine" id="engine" defaultValue="text-curie-001">
                    <option value="text-davinci-002">text-davinci-002</option>
                    <option value="text-curie-001">text-curie-001</option>
                    <option value="text-babbage-001">text-babbage-001</option>
                    <option value="text-ada-001">text-ada-001</option>
                </select>
                <label className='form__label' htmlFor="prompt">Enter prompt:</label>
                <textarea
                    className={error ? 'form__textarea form__textarea--error' : 'form__textarea'}
                    name="prompt"
                    id="prompt"
                    placeholder='e.g. write a poem about a dog who loves to wear sandals'
                ></textarea>
                <p className={error ? 'form__error' : 'form__error--hidden'}>please type a descriptive prompt for the AI!</p>
                <button className='form__button' type='submit' form='promptForm'>Submit</button>
            </form>
        </section>
    )
}
