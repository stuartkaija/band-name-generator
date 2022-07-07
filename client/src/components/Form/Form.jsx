import React from 'react';
import uniqid from 'uniqid';
import './Form.scss';

export default function Form({handleSubmit, error}) {

    const genres = ['rock','punk','hip-hop','soul','funk','easy listening','pop','jazz']

    return (
        <section>
            <form className='form' name='promptForm' id='promptForm' onSubmit={handleSubmit}>
                <div className='form__select-section'>
                    <label className='form__label' htmlFor="genre">select genre</label>
                    <select className='form__select' name="genre" id="genre">
                        <option  value="">--select--</option>
                            {genres.map((genre) => {
                                return (
                                    <option key={uniqid()} value={genre}>{genre}</option>
                                )
                            })}
                    </select>
                </div>
                <p className={error ? 'form__error' : 'form__error--hidden'} id='input-desc'>please select a genre!</p>
                <button className='form__button' type='submit' form='promptForm'>generate name</button>
            </form>
        </section>
    )
}
