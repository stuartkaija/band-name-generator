import React, { useState } from 'react';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    const [example, setExample] = useState('');

    const promptExamples = [
        "Write a poem about the changing seasons.",
        "Write a tagline for a sports equipment store.",
        "Explain the concept of a washing machine to a 5 year old.",
        "Write a tagline for a whitewater rafting school.",
        "Give me a new and original idea for a rock and roll band.",
        "What is the distance from the moon to the sun?",
    ]

    const handlePromptExample = () => {
        console.log('handling examples')
        // randomly select from examples array and set it in state
        const selectedExample = promptExamples[Math.floor(Math.random() * promptExamples.length)];
        setExample(selectedExample)
    };

    return (
        <section>
            <h2 className='form__title'>Enter a prompt for the AI overlords to create a poem with</h2>
            <button onClick={handlePromptExample}>Click to generate an example prompt</button>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <label htmlFor="prompt" hidden>Enter prompt here</label>
                <p className={error ? 'form__error' : 'form__error--hidden'}>the AI overlords require words</p>
                <textarea
                    className={error ? 'form__textarea form__textarea--error' : 'form__textarea'}
                    name="prompt"
                    id="prompt"
                    placeholder='e.g. write a tagline for a music store that sells guitars'
                    defaultValue={example ? example : ''}
                ></textarea>
                <button className='form__button' type='submit' form='promptForm'>Submit</button>
            </form>
        </section>
    )
}
