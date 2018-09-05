import React from 'react'

export class Dialog extends React.Component {
	render() {
		return (
			<div color="blue">
				<h1 className="Dialog-title">
					{this.props.title}
				</h1>
				<p className="Dialog-message">
					{this.props.message}
				</p>
				{this.props.children}
			</div>
		)
	}
}