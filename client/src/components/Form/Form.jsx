import React from 'react';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    return (
        <section className='form-section'>
            <h2 className='form-section__title'>Prompt</h2>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <p className='form__instructions'>Enter a prompt below; once you click submit, the AI engine will respond with some text that attempts to answer whatever you have asked of it. The key to a good prompt is to <span className='form__instructions--span'>be explicit and descriptive</span>!</p>
                <p className='form__instructions'>For example, you could ask it to write you a poem about a dog who loves swimming and playing fetch. Further guidance on writing a good prompt can be found at this <a className='form__instructions--link' href="https://beta.openai.com/docs/guides/completion/prompt-design" target='_blank' rel='noreferrer'>link</a></p>
                <p className='form__instructions'>Information on the different AI engines can be found at this <a className='form__instructions--link' href="https://beta.openai.com/docs/engines" target='_blank' rel='noreferrer'>link</a>. Broadly speaking, Davinci is the most powerful engine, while Ada is the fastest. Experiment with different engines to see how they impact responses.</p>
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
                    placeholder='e.g. Write a poem about a dog who loves swimming and playing fetch'
                    aria-describedby='input-desc'
                ></textarea>
                <p className={error ? 'form__error' : 'form__error--hidden'} id='input-desc'>please type a descriptive prompt for the AI!</p>
                <button className='form__button' type='submit' form='promptForm'>Submit</button>
            </form>
        </section>
    )
}
