import './App.css';
import React, { useEffect, useState } from 'react';
//import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Banner from './components/Banner';
import Home from './components/Home';
//import Multiplicaciones from './components/Multiplicaciones';
//import Validar from './components/Validar';
//import Footer from './components/Footer';
//import Busqueda from './components/Busqueda';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [isUser, setIsUser] = useState(false);

	const handleIsUser = () => {
		if (localStorage.getItem('user') && localStorage.getItem('token')) return true;
		return false;
	};

	useEffect(() => {
		setIsUser(handleIsUser());
	}, [isUser]);

	return (
		//<div className="App">
		//<Banner />
		//<Esquema />
		//<Footer />
		//{count}
		//<button onClick={() => setCount(count + 1)}>Click me</button>
		//</div>
		<Router>
			<Banner isUser={isUser} setIsUser={setIsUser} />
			<Switch>
				<Route exact path="/">
					<Home isUser={isUser} setIsUser={setIsUser} />
				</Route>
				<Route path="/login">
					<Login setIsUser={setIsUser} />
				</Route>
				<Route path="/register">
					<Register setIsUser={setIsUser} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
