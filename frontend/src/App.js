import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Help from './pages/Help';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Help />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

