import React, { Component } from 'react'

export default class Comp2 extends Component {

    render() {
        const { data } = this.props
        return  <div style={{float: 'right', background: ''}}>
            <h1>comp 2</h1>
            <input
                // value={data.get('xyz').get('color')}
                onChange={(e) => {
                    data.set('name', e.target.value)
            }}/>
        </div>
    }
}