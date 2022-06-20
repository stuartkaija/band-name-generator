import React from 'react';
import uniqid from 'uniqid';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    const genres = ['rock','punk','hip-hop','soul','funk','easy listening','pop','jazz']

    return (
        <section className='form-section'>
            <h2 className='form-section__title'>Prompt</h2>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <label className='form__label' htmlFor="model">Select a musical genre</label>
                <select className='form__select' name="genre" id="genre">
                    {genres.map((genre) => {
                        return (
                            <option key={uniqid()} value={genre} defaultValue='select a genre'>{genre}</option>
                        )
                    })}
                </select>
                
                {/* <select className='form__select' name="model" id="model" defaultValue="text-curie-001">
                    <option value="text-davinci-002">text-davinci-002</option>
                    <option value="text-curie-001">text-curie-001</option>
                    <option value="text-babbage-001">text-babbage-001</option>
                    <option value="text-ada-001">text-ada-001</option>
                </select> */}
                {/* <label className='form__label' htmlFor="prompt">Enter prompt:</label>
                <textarea
                    className={error ? 'form__textarea form__textarea--error' : 'form__textarea'}
                    name="prompt"
                    id="prompt"
                    placeholder='e.g. Write a poem about a dog who loves swimming and playing fetch'
                    aria-describedby='input-desc'
                ></textarea>
                <p className={error ? 'form__error' : 'form__error--hidden'} id='input-desc'>please type a descriptive prompt for the AI!</p> */}
                <button className='form__button' type='submit' form='promptForm'>generate band name</button>
            </form>
        </section>
    )
}
