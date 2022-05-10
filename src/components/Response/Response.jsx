import React from 'react';
import './Response.scss';

export default function Response({prompt, completion}) {
    return (
        <li className='response'>
            <div>
                <h3 className='response__timestamp'>Time: </h3>
                <p>12:34, April 14, 2022</p>
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
