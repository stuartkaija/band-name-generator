import React from 'react';
import './Response.scss';

export default function Response({ completion }) {

    console.log(completion);

    return (
        <div className='response'>
            <p className='response__text'>Your new band's name is...</p>
            <p className='response__completion'>{completion}</p>
        </div>
    )
}
