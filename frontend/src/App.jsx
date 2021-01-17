import './App.css';
//import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
//import Banner from './components/Banner';
import Home from './components/Home';
//import Multiplicaciones from './components/Multiplicaciones';
//import Validar from './components/Validar';
//import Footer from './components/Footer';
//import Busqueda from './components/Busqueda';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	//const [count, setCount] = useState(13);

	return (
		//<div className="App">
		//<Banner />
		//<Esquema />
		//<Footer />
		//{count}
		//<button onClick={() => setCount(count + 1)}>Click me</button>
		//</div>
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
