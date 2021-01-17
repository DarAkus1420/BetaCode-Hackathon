import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Banner from './components/Banner';
import Esquema from './components/Esquema';
//import Multiplicaciones from './components/Multiplicaciones';
//import Validar from './components/Validar';
import Footer from './components/Footer';
//import Busqueda from './components/Busqueda';

function App() {
	const [count, setCount] = useState(13);

	return (
		<div className="App">
			<Banner />
			<Login />
			<Esquema />
			<Footer />
			{count}
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

export default App;
