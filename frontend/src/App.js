import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Banner from './components/Banner';

function App() {
	const [count, setCount] = useState(13);

	return (
		<div className="App">
			<Banner />
			<Login />
			{count}

			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

export default App;
