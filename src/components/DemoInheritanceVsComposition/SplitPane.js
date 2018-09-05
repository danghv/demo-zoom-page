import React, { Component } from 'react'
import Element from './Element'

export default class SplitPane extends Element {
	state = {
		isLeft: false
	}
	render() {
		const { isLeft } = this.state
		return (
			<div className="SplitPane">
				<div className="SplitPane-left">
					{isLeft ? super.left() : super.contact()}
				</div>
				<div className="SplitPane-right">
					{isLeft ? super.right() : super.chat()}
				</div>
				<button
					onClick={() => this.setState({isLeft: !isLeft})}
				>click me</button>
			</div>
		)
	}
}