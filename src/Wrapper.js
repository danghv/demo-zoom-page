import React from 'react'
import DemoAutoAdjust from './components/DemoAutoAdjust'

export default class Wrapper extends React.Component {



	render() {
		const {zoom} = this.state
		console.log('zoom...', zoom)
		return (
			<div>
				<DemoAutoAdjust zoom={this.state.zoom}>
					<div style={{ width: '500px', height: '500px', background: 'blue'}}></div>
				</DemoAutoAdjust>
			</div>
		)
	}
}