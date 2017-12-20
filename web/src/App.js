// @flow
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'
import NotFound from './views/not-found'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
