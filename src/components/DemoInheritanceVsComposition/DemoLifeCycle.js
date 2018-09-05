import React, { Component } from 'react'
import P from './P'

export default class DemoLifeCycle extends Component {
	constructor(props) {
		super(props)
		console.log('1... before intial state')
		this.state = {
			// foo: 'my foo value',
			text: 'just a demo of lifecycle',
			isDisplay: true
		}
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('2... get derived state', nextProps, prevState)
		return nextProps
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('5....should update?', nextProps, nextState)
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('6... getsnap before update', prevProps, prevState)
		return {...this.state}
	}
	componentDidMount() {
		// console.log(this.state.foo)
		console.log('4...before real render')
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('7... component did update (before real update)', prevProps, prevState, snapshot)
	}
	componentWillUnmount() {
		console.log('unmoting...')
	}
	render() {
		console.log('3... render')
		const { isDisplay, text, foo } = this.state
		return (
			<div>
				{isDisplay && <P text={text}/>}
				<h1>{foo}</h1>
				<br/>
				<button onClick={() => {
					this.setState({isDisplay: !isDisplay})
				}}>click me</button>
			</div>
		)
	}
}