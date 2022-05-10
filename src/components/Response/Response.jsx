import React from 'react';
import './Response.scss';

export default function Response({time, prompt, completion}) {
    return (
        <li className='response'>
            <div>
                <h3>Created: </h3>
                <p className='response__timestamp'>{time}</p>
            </div>
            <div>
                <h3>Prompt: </h3>
                <p className='response__prompt'>{prompt}</p>
            </div>
            <div>
                <h3>Response: </h3>
                <p className='response__completion'>{completion}</p>
            </div>
        </li>
    )
}
