import React from 'react';
import './Response.scss';

export default function Response({model, prompt, completion, loading}) {

    console.log(loading);

    // if (loading) {
    //     return (
    //         <h3>Loading...</h3>
    //     )
    // }

    return (
        <li className='response'>
            {loading ? <p>Loading</p> : <></>}
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
