import React from 'react';
import './Response.scss';

export default function Response({engine, prompt, completion}) {
    return (
        <li className='response'>
            <div className='response__container'>
                <h3>Engine: </h3>
                <p>{engine}</p>
            </div>
            <div className='response__container'>
                <h3>Prompt: </h3>
                <p>{prompt}</p>
            </div>
            <div className='response__container'>
                <h3>Response: </h3>
                <p>{completion}</p>
            </div>
        </li>
    )
}
