import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<main className="App">
				<Nav />
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/about' element={<AboutPage/>} />
				</Routes>
				<Footer />
			</main>
		</BrowserRouter>
	);
}

export default App;
