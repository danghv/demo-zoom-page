import React, { Component } from 'react'

export default class Left extends Component {
    render() {
        // console.log('left data...', this.props.leftData)
        return <div
            style={{width: '300px', height: '300px', background: `${this.props.leftData.state.data.get('xyz').get('color')}`}}
        >

            <h1>i am left</h1>
            {/*<h1>{this.props.leftData.abc.abc}</h1>*/}
            <input type="text"/>
            <button>click me</button>
        </div>
    }
}