import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import ResponseList from './components/ResponseList/ResponseList';
import './App.scss';

function App() {

	const [prompt, setPrompt] = useState('');
	
	// completions will be an array of objects, each object consistin of the user inputted prompt and the completion *and timestamp which I think comes in the completion data* returned by the API
    const [completions, setCompletions] = useState([
		{
			prompt: "EL5: What does a washing machine do?",
			completion: "It cleans clothing using water and soap and by shaking and moving the clothing and water and soap around in a large tub"
		},
		{
			prompt: "Write me a poem about the changing seasons",
			completion: "Fall comes, leaves fall, Winter approaches"
		},
		{
			prompt: "Tell me this is it",
			completion: "This is it"
		}
	]);

	const handleSubmit = (event) => {
        event.preventDefault();
		console.log("handling submit!");
        const userInput = event.target.prompt.value;
        setPrompt(userInput);
        event.target.reset();
    }

	//useEffect to make call to API
    // useEffect(() => {

    //     const url = "https://api.openai.com/v1/engines/text-curie-001/completions"
    //     const data = {
    //         prompt: "Tell me this is it",
    //         max_tokens: 5,
    //         temperature: 1          
    //     }
    //     const config = {
    //         headers: {
    //             Authorization: "api key goes here"
    //         }
    //     }

    //     const getCompletion = async () => {
    //         try {
    //             const response = await axios.post(url, data, config)
    //             console.log(response);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     // getCompletion();

    //     console.log("useEffect running")

    // }, [prompt])

	return (
		<div className="App">
			<h1>Title!</h1>
			<Form
				handleSubmit={handleSubmit}
			/>
			<ResponseList
				completions={completions}
			/>
		</div>
	);
}

export default App;
