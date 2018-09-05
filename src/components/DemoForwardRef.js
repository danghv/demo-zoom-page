import React, { Component } from 'react'

function FancyButton(props) {
	return (
		<button className="FancyButton">
			{props.children}
		</button>
	)
}

export default class DemoForwardRef extends Component {
	render() {
		return (
			<div>demo forwardref

			</div>
		)
	}
}