import React, { Component } from 'react'
import DemoLifeCycle from './DemoLifeCycle'
import SplitPane from './SplitPane'

export default class DemoIVC extends Component {
	render() {
		return (
			<div>
				{/*<Paragraph />*/}
				{/*<SplitPane />*/}
				{/*<WelcomeDialog/>*/}
				<DemoLifeCycle foo={"bar"}/>
			</div>
		)
	}
}