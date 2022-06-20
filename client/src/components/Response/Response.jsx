import React from 'react';
import './Response.scss';

export default function Response({model, prompt, completion}) {
    return (
        <li className='response'>
            <div className='response__container'>
                <h3>Response: </h3>
                <p className='response__text'>{completion}</p>
            </div>
        </li>
    )
}
