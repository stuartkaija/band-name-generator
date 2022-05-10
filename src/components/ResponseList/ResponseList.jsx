import React from 'react';
import Response from '../Response/Response';
import uniqid from 'uniqid';
import './ResponseList.scss';

export default function ResponseList({completions}) {
    return (
        <div className='responses'>
            <h2 className='responses__title'>Responses</h2>
                <ul className='responses__list'>
                    {completions.map(completion => {
                        return (
                            <Response
                                key={uniqid()}
                                prompt={completion.prompt}
                                completion={completion.completion}
                            />
                        )
                    })}
                </ul>
        </div>
    )
}
