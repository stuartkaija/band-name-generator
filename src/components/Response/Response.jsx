import React from 'react';
import './Response.scss';

export default function Response({prompt, completion}) {
    return (
        <div>
            <p>timestamp here</p>
            <p>{prompt}</p>
            <p>{completion}</p>
        </div>
    )
}
