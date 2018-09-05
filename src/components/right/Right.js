import React, { Component } from 'react'


export default class Right extends Component {
    state = {
        value: ''
    }


    render() {
        // console.log('right data...', this.props.rightData.state.data)
        return <div
            style={{width: 300, height: 300, background: this.props.rightData.state.backgroundColor || 'green'}}
        >
            <h1>i am right</h1>
            <h1>{this.props.rightData.state.data.attributes.color}</h1>
            <input type="text" value={this.state.value} onChange={(e) => {
                this.setState({value: e.target.value})
                this.props.rightData.setBackground(e)
            }}/>
            <button
                onClick={() => {
                    this.props.rightData.state.data.attributes.xyz.set({color: this.state.value})
                }}
            >click me</button>
        </div>

    }
}