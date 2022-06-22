import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
		<main className="App">
			<Routes>
				<Route path='/' element={<HomePage/>} />
				<Route path='/about' />
			</Routes>
			
			<Footer />
		</main>
		</BrowserRouter>
	);
}

export default App;
