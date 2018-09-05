import React from 'react'

export default class DemoAutoAdjust extends React.Component {
	state = {
		width: 300,
		height: 500,
		zoom: 1
	}

	componentDidMount() {


		window.addEventListener('resize', () => {
			let windowWidth = window.outerWidth
			let windowHeight = window.outerHeight
			let zoomX = windowWidth / this.state.width
			let zoomY = windowHeight / this.state.height
			let zoom = zoomX <= zoomY ? zoomX : zoomY
			if (zoom > 1) zoom = 1
			if (windowHeight < this.state.height && windowWidth < this.state.width) {
				this.setState({zoom, width: windowWidth, height: windowHeight})
			}
			this.setState({ zoom })
		})
	}

	render() {
		const { width, height, zoom } = this.state


		return (
			<div
				style={{
					width: `${width}px`,
					height: `${height}px`,
					// backgroundColor: 'dodgerblue',
					transform: `scale(${zoom})`,
					transformOrigin: "0%",
				}}
				className="d-inline-block"
			>
				{this.props.children}
			</div>
		)
	}
}