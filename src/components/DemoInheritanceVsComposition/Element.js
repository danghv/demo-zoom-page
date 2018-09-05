import React, { Component } from 'react'

export default class Element extends Component {
	static left() {
		return <div>left...</div>
	}
	fanceBorder() {
		return (
			<div className={'FancyBorder FancyBorder-' + this.props.color}>
				{this.props.children}
			</div>
		)
	}
	left() {
		return (
			<h1>i am left</h1>
		)
	}
	right() {
		return (
			<h1>i am right</h1>
		)
	}
	contact() {
		return (
			<h1>i am contact</h1>
		)
	}
	chat() {
		return (
			<h1>i am chat</h1>
		)
	}
	calculateSomething(number) {
		return number * number
	}
	render() {
		console.log('props element...', this.props)
		return (
			<div>
				<h1>Element...</h1>
				{ this.props.children }
			</div>
		)
	}
}