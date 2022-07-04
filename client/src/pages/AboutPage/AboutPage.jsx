import React from 'react'

export default function AboutPage() {
    return (
        <div>
            <p>Thie app was built using the <a href="https://beta.openai.com/" target="_blank" rel='noreferrer'>OpenAI API</a>; the band names are being generated by artificial intelligence models.</p>
            <p> Selecting a genre and clicking the generate button submits a form to a server, which then makes an API call with a prompt requesting an original band name.</p>
        </div>
    )
}
