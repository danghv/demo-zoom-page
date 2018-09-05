import React from 'react'

export default class P extends React.Component {
	componentWillUnmount() {
		console.log('say goodbye from Paragraph...')
	}
	render() {
		return (
			<p>{this.props.text}</p>
		)
	}
}