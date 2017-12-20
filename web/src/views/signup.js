// @flow
import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Navbar from 'components/navbar'

const SignupForm = ({ onSubmit }: { onSubmit: () => void }) => (
	<form onSubmit={onSubmit}>
		<h3>Create an account</h3>
		<input type="text" placeholder="Username" />
		<input type="email" placeholder="Email" />
		<input type="password" placeholder="Password" />
		<button type="submit">Sign up</button>
		<hr />
		<Link to="/login">Login to your account</Link>
	</form>
)

class Signup extends Component {
	static contextTypes = {
		router: propTypes.object,
	}

	handleSignup = data => {
		// TODO: signup
	}

	render() {
		return (
			<div style={{ flex: '1' }}>
				<Navbar />
				<SignupForm onSubmit={this.handleSignup} />
			</div>
		)
	}
}

export default Signup
