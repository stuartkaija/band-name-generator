import React from 'react';
import './Response.scss';

export default function Response({model, prompt, completion}) {
    return (
        <li className='response'>
            <div className='response__container'>
                <h3>Model: </h3>
                <p>{model}</p>
            </div>
            <div className='response__container'>
                <h3>Prompt: </h3>
                <p className='response__text'>{prompt}</p>
            </div>
            <div className='response__container'>
                <h3>Response: </h3>
                <p className='response__text'>{completion}</p>
            </div>
        </li>
    )
}
