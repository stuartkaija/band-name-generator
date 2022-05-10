import React from 'react';
import Response from '../Response/Response';
import uniqid from 'uniqid';
import './ResponseList.scss';

export default function ResponseList({completions}) {
    return (
        <div>
            <h2>Responses</h2>
                <ul>
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
