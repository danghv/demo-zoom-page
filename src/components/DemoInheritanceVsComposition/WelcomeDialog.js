import React from 'react'
import {Dialog} from './Dialog'

export default class WelcomeDialog extends Dialog {
	state = {
		login: ''
	}

	handleChange = (e) => {
		this.setState({login: e.target.value});
	}

	handleSignUp = () => {
		alert(`Welcome aboard, ${this.state.login}!`);
	}
	render() {
		return (
			<Dialog
				title="Welcome"
				message="Thank you for visiting our spacecraft!" >
				<input value={this.state.login}
				       onChange={this.handleChange} />

				<button onClick={this.handleSignUp}>
					Sign Me Up!
				</button>
			</Dialog>

		)
	}
}