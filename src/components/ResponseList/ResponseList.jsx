import React from 'react';
import './ResponseList.scss';
import Response from '../Response/Response';

export default function ResponseList({completions}) {
    return (
        <div>
            <h2>Responses</h2>
                <ul>
                    {completions.map(completion => {
                        return (
                            <Response
                                prompt={completion.prompt}
                                completion={completion.completion}
                            />
                        )
                    })}
                </ul>
        </div>
    )
}
