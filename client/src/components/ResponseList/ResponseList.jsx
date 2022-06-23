import React from 'react';
import Response from '../Response/Response';
import uniqid from 'uniqid';
import './ResponseList.scss';

export default function ResponseList({ completions }) {
    return (
        <section className='responses'>
            <h2 className='responses__title'>Responses</h2>
            <ul className='responses__list'>
                {completions.map(completion => {
                    return (
                        <Response
                            key={uniqid()}
                            completion={completion.completion}
                        />
                    )
                })}
            </ul>
        </section>
    )
}
