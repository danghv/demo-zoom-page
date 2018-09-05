import Element from './Element'
import React from 'react'

export default class Paragraph extends Element {
	render() {
		console.log('display name...', this.displayName)
		const AAA = Element.left()
		return (
			<div>
				{AAA}
			</div>
		)
	}

	// render() {
	// 	return (
	// 		<div className="SplitPane">
	// 			<div className="SplitPane-left">
	// 				{super.left()}
	// 			</div>
	// 			<div className="SplitPane-right">
	// 				{super.right()}
	// 			</div>
	// 		</div>
	// 	)
	// }
}