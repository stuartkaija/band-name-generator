import React from 'react';
import './Response.scss';

export default function Response({prompt, completion}) {
    return (
        <li className='response'>
            <p className='response__timestamp'>Time: timestamp here</p>
            <p className='response__prompt'>Prompt: {prompt}</p>
            <p className='response__completion'>Response: {completion}</p>
        </li>
    )
}
