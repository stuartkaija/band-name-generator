import React from 'react';
import './Response.scss';

export default function Response({time, prompt, completion}) {
    return (
        <li className='response'>
            <div className='response__container'>
                <h3 className='response__title'>Created: </h3>
                <p className='response__timestamp'>{time}</p>
            </div>
            <div className='response__container'>
                <h3 className='response__title'>Prompt: </h3>
                <p className='response__prompt'>{prompt}</p>
            </div>
            <div className='response__container'>
                <h3 className='response__title'>Response: </h3>
                <p className='response__completion'>{completion}</p>
            </div>
        </li>
    )
}
