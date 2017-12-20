// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import Navbar from 'components/navbar'

const LoginForm = ({ onSubmit }: { onSubmit: () => void }) => (
	<form onSubmit={onSubmit}>
		<h3>Log in to Sling</h3>
		<input type="text" placeholder="Email" />
		<input type="password" placeholder="Password" />
		<button type="submit">Log in</button>
		<hr />
		<Link to="/signup">Create a new account</Link>
	</form>
)

class Login extends Component {
	static contextTypes = {
		router: propTypes.object,
	}

	handleLogin = data => {
		// Todo
	}

	render() {
		return (
			<div style={{ flex: 1 }}>
				<Navbar />
				<LoginForm onSubmit={this.handleLogin} />
			</div>
		)
	}
}

export default Login
