import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import History from './components/history/History';
import Workout from './components/workout/Workout';
import User from './components/user/User';

import './App.css';

// Check local storage for token
if (localStorage.jwtToken) {
	setAuthToken(localStorage.jwtToken);
	const decoded = jwt_decode(localStorage.jwtToken);
	store.dispatch(setCurrentUser(decoded));

	// check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		// redirect to login
		window.location.href = '/login';
	}
}

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Route exact path="/" component={Landing} />
					<div className="container app-container">
						<Route exact path="/user" component={User} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/history" component={History} />
						<Route exact path="/workout" component={Workout} />
					</div>
					<Navbar />
				</div>
			</Router>
		</Provider>
	);
}

export default App;